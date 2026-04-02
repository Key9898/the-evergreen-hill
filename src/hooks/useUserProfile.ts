import { useState, useCallback } from 'react'
import { useAuthContext } from '../context/AuthContext'
import type { AuthUser } from '../types/auth'

interface ProfileFormState {
  displayName: string
  phone: string
  country: string
  isEditing: boolean
  isSaving: boolean
  error: string | null
  successMessage: string | null
}

interface UseUserProfileReturn {
  user: AuthUser | null
  formState: ProfileFormState
  handleEditToggle: () => void
  handleChange: (field: 'displayName' | 'phone' | 'country', value: string) => void
  handleSave: () => Promise<void>
  handleCancel: () => void
  clearMessages: () => void
}

export function useUserProfile(): UseUserProfileReturn {
  const { user } = useAuthContext()
  const [formState, setFormState] = useState<ProfileFormState>({
    displayName: user?.displayName ?? '',
    phone: '',
    country: '',
    isEditing: false,
    isSaving: false,
    error: null,
    successMessage: null,
  })

  const handleEditToggle = useCallback(() => {
    setFormState((prev) => ({
      ...prev,
      isEditing: !prev.isEditing,
      displayName: user?.displayName ?? '',
    }))
  }, [user])

  const handleChange = useCallback((field: 'displayName' | 'phone' | 'country', value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
  }, [])

  const handleSave = useCallback(async () => {
    setFormState((prev) => ({ ...prev, isSaving: true, error: null }))
    try {
      await Promise.resolve()
      setFormState((prev) => ({
        ...prev,
        isEditing: false,
        successMessage: 'Profile updated. (Firebase not configured yet)',
      }))
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update profile'
      setFormState((prev) => ({ ...prev, error: message }))
    } finally {
      setFormState((prev) => ({ ...prev, isSaving: false }))
    }
  }, [])

  const handleCancel = useCallback(() => {
    setFormState((prev) => ({
      ...prev,
      isEditing: false,
      displayName: user?.displayName ?? '',
      error: null,
    }))
  }, [user])

  const clearMessages = useCallback(() => {
    setFormState((prev) => ({ ...prev, error: null, successMessage: null }))
  }, [])

  return {
    user,
    formState,
    handleEditToggle,
    handleChange,
    handleSave,
    handleCancel,
    clearMessages,
  }
}
