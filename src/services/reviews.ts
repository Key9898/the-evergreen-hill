import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../lib/firebase'

export interface FirestoreReview {
  id: string
  name: string
  country: string
  roomType: string
  rating: number
  content: string
  date: string
  userId: string
  createdAt: string
}

export async function getReviews(): Promise<FirestoreReview[]> {
  const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'))
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as FirestoreReview)
}

export async function createReview(
  review: Omit<FirestoreReview, 'id' | 'createdAt'>
): Promise<FirestoreReview> {
  const docRef = await addDoc(collection(db, 'reviews'), {
    ...review,
    createdAt: serverTimestamp(),
  })
  return {
    ...review,
    id: docRef.id,
    createdAt: new Date().toISOString(),
  }
}

export async function getReviewsByUser(userId: string): Promise<FirestoreReview[]> {
  const q = query(
    collection(db, 'reviews'),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  )
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as FirestoreReview)
}

export async function deleteReview(id: string): Promise<void> {
  await deleteDoc(doc(db, 'reviews', id))
}

export async function updateReview(
  id: string,
  data: Partial<Omit<FirestoreReview, 'id' | 'createdAt' | 'userId'>>
): Promise<void> {
  await updateDoc(doc(db, 'reviews', id), data)
}
