import { useState, useEffect, useCallback } from 'react'
import { collection, onSnapshot, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore'
import { db } from '../lib/firebase'
import { useAuthContext } from '../context/AuthContext'
import { ROOMS_PER_TYPE } from '../constants/rooms'

export interface FirestoreBooking {
  id: string
  roomName: string
  roomNameKey?: string
  checkIn: string
  checkOut: string
  adults?: number
  children?: number
  rooms: number
  userId?: string
  status?: string
  createdAt?: { seconds: number; nanoseconds: number } | string
}

export interface SearchCriteria {
  checkIn: string
  checkOut: string
}

function datesOverlap(aStart: string, aEnd: string, bStart: string, bEnd: string): boolean {
  return new Date(aStart) < new Date(bEnd) && new Date(bStart) < new Date(aEnd)
}

export function useFirestoreBookings() {
  const { user } = useAuthContext()
  const [bookings, setBookings] = useState<FirestoreBooking[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const q = query(collection(db, 'bookings'), orderBy('createdAt', 'desc'))

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as FirestoreBooking[]
        setBookings(data)
        setIsLoading(false)
        setError(null)
      },
      (err) => {
        console.error('Firestore bookings error:', err)
        setError('Failed to load bookings')
        setIsLoading(false)
      }
    )

    return () => unsubscribe()
  }, [])

  const addBooking = useCallback(
    async (data: Omit<FirestoreBooking, 'id' | 'createdAt'>) => {
      if (!user) {
        throw new Error('You must be signed in to make a booking')
      }

      try {
        await addDoc(collection(db, 'bookings'), {
          ...data,
          userId: user.uid,
          status: 'confirmed',
          createdAt: serverTimestamp(),
        })
      } catch (err) {
        console.error('Failed to add booking:', err)
        throw new Error('Failed to create booking')
      }
    },
    [user]
  )

  const computeAvailability = useCallback(
    (roomNameKey: string, searchCriteria: SearchCriteria | null): number => {
      if (!searchCriteria) return ROOMS_PER_TYPE

      const bookedCount = bookings.reduce((acc, b) => {
        const bookingRoomKey = b.roomNameKey || b.roomName?.toLowerCase().replace(/\s+/g, '-')
        if (
          bookingRoomKey === roomNameKey &&
          datesOverlap(searchCriteria.checkIn, searchCriteria.checkOut, b.checkIn, b.checkOut) &&
          b.status !== 'cancelled'
        ) {
          return acc + (typeof b.rooms === 'number' ? b.rooms : 1)
        }
        return acc
      }, 0)

      return Math.max(ROOMS_PER_TYPE - bookedCount, 0)
    },
    [bookings]
  )

  const computeAllAvailability = useCallback(
    (roomNameKeys: string[], searchCriteria: SearchCriteria | null): Record<string, number> => {
      const result: Record<string, number> = {}
      for (const key of roomNameKeys) {
        result[key] = computeAvailability(key, searchCriteria)
      }
      return result
    },
    [computeAvailability]
  )

  return {
    bookings,
    isLoading,
    error,
    addBooking,
    computeAvailability,
    computeAllAvailability,
  }
}
