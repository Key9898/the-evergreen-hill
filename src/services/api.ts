import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../lib/firebase'
import type { Booking, BookingWithUser } from '../types/booking'
import type { Room } from '../types/room'

export async function getRooms(): Promise<Room[]> {
  const snap = await getDocs(collection(db, 'rooms'))
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Room)
}

export async function createBooking(
  booking: Omit<BookingWithUser, 'id' | 'createdAt'>
): Promise<BookingWithUser> {
  const docRef = await addDoc(collection(db, 'bookings'), {
    ...booking,
    createdAt: serverTimestamp(),
  })
  return {
    ...booking,
    id: docRef.id,
    createdAt: new Date().toISOString(),
  }
}

export async function getBooking(id: string): Promise<Booking> {
  const snap = await getDoc(doc(db, 'bookings', id))
  if (!snap.exists()) throw new Error('Booking not found')
  return { id: snap.id, ...snap.data() } as Booking
}

export async function getBookingsByUser(userId: string): Promise<Booking[]> {
  const q = query(
    collection(db, 'bookings'),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  )
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Booking)
}

export async function cancelBooking(id: string): Promise<void> {
  await updateDoc(doc(db, 'bookings', id), { status: 'cancelled' })
}
