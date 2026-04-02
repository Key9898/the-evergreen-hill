import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
  onAuthStateChanged,
  sendPasswordResetEmail as firebaseSendPasswordResetEmail,
} from 'firebase/auth'
import type { User } from 'firebase/auth'
import { auth } from '../lib/firebase'
import type { AuthUser } from '../types/auth'

function mapFirebaseUser(user: User): AuthUser {
  return {
    uid: user.uid,
    email: user.email ?? '',
    displayName: user.displayName,
    photoURL: user.photoURL,
    role: 'guest',
    createdAt: user.metadata.creationTime ?? new Date().toISOString(),
  }
}

export async function signInWithEmail(email: string, password: string): Promise<AuthUser> {
  const { user } = await signInWithEmailAndPassword(auth, email, password)
  return mapFirebaseUser(user)
}

export async function signUpWithEmail(
  email: string,
  password: string,
  displayName: string
): Promise<AuthUser> {
  const { user } = await createUserWithEmailAndPassword(auth, email, password)
  await updateProfile(user, { displayName })
  return mapFirebaseUser(user)
}

export async function signInWithGoogle(): Promise<AuthUser> {
  const provider = new GoogleAuthProvider()
  const { user } = await signInWithPopup(auth, provider)
  return mapFirebaseUser(user)
}

export async function signOutUser(): Promise<void> {
  await signOut(auth)
}

export async function sendPasswordResetEmail(email: string): Promise<void> {
  await firebaseSendPasswordResetEmail(auth, email)
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe()
      resolve(user ? mapFirebaseUser(user) : null)
    })
  })
}
