import { useState, useCallback } from 'react'
import type { RegisterFormState } from '../types/auth'
import { useAuthContext } from '../context/AuthContext'

interface UseRegisterFormReturn {
  formState: RegisterFormState
  handleChange: (field: keyof RegisterFormState, value: string | boolean) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  clearError: () => void
  passwordsMatch: boolean
}

export function useRegisterForm(onSuccess?: () => void): UseRegisterFormReturn {
  const { signUp } = useAuthContext()
  const [formState, setFormState] = useState<RegisterFormState>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    country: '',
    agreeTerms: false,
    isSubmitting: false,
    error: null,
  })

  const handleChange = useCallback((field: keyof RegisterFormState, value: string | boolean) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
  }, [])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (formState.password !== formState.confirmPassword) {
        setFormState((prev) => ({ ...prev, error: 'Passwords do not match' }))
        return
      }
      setFormState((prev) => ({ ...prev, isSubmitting: true, error: null }))
      try {
        const displayName = `${formState.firstName} ${formState.lastName}`.trim()
        await signUp(formState.email, formState.password, displayName)
        if (onSuccess) onSuccess()
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Registration failed'
        setFormState((prev) => ({ ...prev, error: message }))
      } finally {
        setFormState((prev) => ({ ...prev, isSubmitting: false }))
      }
    },
    [formState, signUp, onSuccess]
  )

  const clearError = useCallback(() => {
    setFormState((prev) => ({ ...prev, error: null }))
  }, [])

  return {
    formState,
    handleChange,
    handleSubmit,
    clearError,
    passwordsMatch:
      formState.confirmPassword === '' || formState.password === formState.confirmPassword,
  }
}
