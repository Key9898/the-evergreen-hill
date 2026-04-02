import { useState, useCallback } from 'react'
import type { LoginFormState } from '../types/auth'
import { useAuthContext } from '../context/AuthContext'

interface UseLoginFormReturn {
  formState: LoginFormState
  handleEmailChange: (value: string) => void
  handlePasswordChange: (value: string) => void
  handleRememberMeChange: (value: boolean) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  clearError: () => void
}

export function useLoginForm(onSuccess?: () => void): UseLoginFormReturn {
  const { signIn } = useAuthContext()
  const [formState, setFormState] = useState<LoginFormState>({
    email: '',
    password: '',
    rememberMe: false,
    isSubmitting: false,
    error: null,
  })

  const handleEmailChange = useCallback((value: string) => {
    setFormState((prev) => ({ ...prev, email: value }))
  }, [])

  const handlePasswordChange = useCallback((value: string) => {
    setFormState((prev) => ({ ...prev, password: value }))
  }, [])

  const handleRememberMeChange = useCallback((value: boolean) => {
    setFormState((prev) => ({ ...prev, rememberMe: value }))
  }, [])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      setFormState((prev) => ({ ...prev, isSubmitting: true, error: null }))
      try {
        await signIn(formState.email, formState.password)
        if (onSuccess) onSuccess()
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Login failed'
        setFormState((prev) => ({ ...prev, error: message }))
      } finally {
        setFormState((prev) => ({ ...prev, isSubmitting: false }))
      }
    },
    [formState.email, formState.password, signIn, onSuccess]
  )

  const clearError = useCallback(() => {
    setFormState((prev) => ({ ...prev, error: null }))
  }, [])

  return {
    formState,
    handleEmailChange,
    handlePasswordChange,
    handleRememberMeChange,
    handleSubmit,
    clearError,
  }
}
