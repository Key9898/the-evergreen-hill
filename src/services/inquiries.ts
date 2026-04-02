import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../lib/firebase'

export interface ContactInquiry {
  name: string
  email: string
  subject: string
  message: string
}

export interface SpaInquiry {
  name: string
  email: string
  phone: string
  roomNumber: string
  treatmentType: string
  date: string
  content: string
  userId?: string
}

export interface EventInquiry {
  name: string
  phone: string
  email: string
  eventType: string
  content: string
  date: string
  guests: number
  userId?: string
}

export interface ActivityInquiry {
  name: string
  phone: string
  email: string
  activityType: string
  content: string
  date: string
  person: number
  adults: number
  children: number
  childrenAges: number[]
  userId?: string
}

export async function createContact(data: ContactInquiry): Promise<string> {
  const docRef = await addDoc(collection(db, 'contacts'), {
    ...data,
    createdAt: serverTimestamp(),
  })
  return docRef.id
}

export async function createSpaBooking(data: SpaInquiry): Promise<string> {
  const docRef = await addDoc(collection(db, 'spa-bookings'), {
    ...data,
    createdAt: serverTimestamp(),
  })
  return docRef.id
}

export async function createEventBooking(data: EventInquiry): Promise<string> {
  const docRef = await addDoc(collection(db, 'event-bookings'), {
    ...data,
    createdAt: serverTimestamp(),
  })
  return docRef.id
}

export async function createActivityBooking(data: ActivityInquiry): Promise<string> {
  const docRef = await addDoc(collection(db, 'activity-bookings'), {
    ...data,
    createdAt: serverTimestamp(),
  })
  return docRef.id
}
