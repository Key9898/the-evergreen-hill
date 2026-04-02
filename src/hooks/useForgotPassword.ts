import { useState, useCallback } from 'react'
import type { ForgotPasswordState } from '../types/auth'
import { useAuthContext } from '../context/AuthContext'

interface UseForgotPasswordReturn {
  formState: ForgotPasswordState
  handleEmailChange: (value: string) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  clearError: () => void
  reset: () => void
}

export function useForgotPassword(): UseForgotPasswordReturn {
  const { sendPasswordReset } = useAuthContext()
  const [formState, setFormState] = useState<ForgotPasswordState>({
    email: '',
    isSubmitting: false,
    isSent: false,
    error: null,
  })

  const handleEmailChange = useCallback((value: string) => {
    setFormState((prev) => ({ ...prev, email: value }))
  }, [])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      setFormState((prev) => ({ ...prev, isSubmitting: true, error: null }))
      try {
        await sendPasswordReset(formState.email)
        setFormState((prev) => ({ ...prev, isSent: true }))
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to send reset email'
        setFormState((prev) => ({ ...prev, error: message }))
      } finally {
        setFormState((prev) => ({ ...prev, isSubmitting: false }))
      }
    },
    [formState.email, sendPasswordReset]
  )

  const clearError = useCallback(() => {
    setFormState((prev) => ({ ...prev, error: null }))
  }, [])

  const reset = useCallback(() => {
    setFormState({ email: '', isSubmitting: false, isSent: false, error: null })
  }, [])

  return { formState, handleEmailChange, handleSubmit, clearError, reset }
}
