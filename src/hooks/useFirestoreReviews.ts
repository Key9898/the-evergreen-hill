import { useState, useEffect, useCallback } from 'react'
import { collection, onSnapshot, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore'
import { db } from '../lib/firebase'
import { useAuthContext } from '../context/AuthContext'

export interface FirestoreReview {
  id: string
  name: string
  country: string
  roomType: string
  rating: number
  content: string
  date: string
  userId?: string
  createdAt?: { seconds: number; nanoseconds: number } | string
}

export function useFirestoreReviews() {
  const { user } = useAuthContext()
  const [reviews, setReviews] = useState<FirestoreReview[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'))

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as FirestoreReview[]
        setReviews(data)
        setIsLoading(false)
        setError(null)
      },
      (err) => {
        console.error('Firestore reviews error:', err)
        setError('Failed to load reviews')
        setIsLoading(false)
      }
    )

    return () => unsubscribe()
  }, [])

  const addReview = useCallback(
    async (data: Omit<FirestoreReview, 'id' | 'createdAt'>) => {
      if (!user) {
        throw new Error('You must be signed in to leave a review')
      }

      try {
        await addDoc(collection(db, 'reviews'), {
          ...data,
          userId: user.uid,
          createdAt: serverTimestamp(),
        })
      } catch (err) {
        console.error('Failed to add review:', err)
        throw new Error('Failed to submit review')
      }
    },
    [user]
  )

  const computeRoomStats = useCallback(() => {
    const sumMap = new Map<string, { sum: number; count: number }>()

    for (const r of reviews) {
      if (!r?.roomType || typeof r.rating !== 'number') continue
      const key = r.roomType.toLowerCase().trim()
      const entry = sumMap.get(key) ?? { sum: 0, count: 0 }
      entry.sum += r.rating
      entry.count += 1
      sumMap.set(key, entry)
    }

    const result: Record<string, { avg: number; count: number }> = {}
    for (const [key, { sum, count }] of sumMap.entries()) {
      result[key] = { avg: count ? sum / count : 0, count }
    }

    return result
  }, [reviews])

  return {
    reviews,
    isLoading,
    error,
    addReview,
    computeRoomStats,
  }
}
