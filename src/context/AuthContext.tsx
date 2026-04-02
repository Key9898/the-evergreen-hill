import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import type { AuthUser, AuthContextValue } from '../types/auth'
import {
  signInWithEmail,
  signUpWithEmail,
  signInWithGoogle as signInWithGoogleService,
  signOutUser,
  sendPasswordResetEmail,
  getCurrentUser,
} from '../services/auth'

const AuthContext = createContext<AuthContextValue | null>(null)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getCurrentUser()
      .then(setUser)
      .finally(() => setIsLoading(false))
  }, [])

  const signIn = async (email: string, password: string) => {
    const authUser = await signInWithEmail(email, password)
    setUser(authUser)
  }

  const signUp = async (email: string, password: string, displayName: string) => {
    const authUser = await signUpWithEmail(email, password, displayName)
    setUser(authUser)
  }

  const signOut = async () => {
    await signOutUser()
    setUser(null)
  }

  const sendPasswordReset = async (email: string) => {
    await sendPasswordResetEmail(email)
  }

  const signInWithGoogle = async () => {
    const authUser = await signInWithGoogleService()
    setUser(authUser)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: user !== null,
        signIn,
        signUp,
        signOut,
        sendPasswordReset,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext(): AuthContextValue {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuthContext must be used within AuthProvider')
  }
  return context
}
