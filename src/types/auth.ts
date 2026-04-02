export type UserRole = 'guest' | 'admin'

export interface AuthUser {
  uid: string
  email: string
  displayName: string | null
  photoURL: string | null
  role: UserRole
  createdAt: string
}

export interface LoginFormState {
  email: string
  password: string
  rememberMe: boolean
  isSubmitting: boolean
  error: string | null
}

export interface RegisterFormState {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  phone: string
  country: string
  agreeTerms: boolean
  isSubmitting: boolean
  error: string | null
}

export interface ForgotPasswordState {
  email: string
  isSubmitting: boolean
  isSent: boolean
  error: string | null
}

export interface AuthContextValue {
  user: AuthUser | null
  isLoading: boolean
  isAuthenticated: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, displayName: string) => Promise<void>
  signOut: () => Promise<void>
  sendPasswordReset: (email: string) => Promise<void>
  signInWithGoogle: () => Promise<void>
}
