import { useState } from 'react'
import { createSpaBooking } from '../services/inquiries'
import { useAuthContext } from '../context/AuthContext'

export type SpaFormData = {
  name: string
  email: string
  phone: string
  roomNumber: string
  treatmentType: string
  date: string
  content: string
}

export function useSpaForm() {
  const { user } = useAuthContext()
  const [formData, setFormData] = useState<SpaFormData>({
    name: '',
    email: '',
    phone: '',
    roomNumber: '',
    treatmentType: '',
    date: '',
    content: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setIsSuccess(false)

    try {
      await createSpaBooking({ ...formData, userId: user?.uid })
      setIsSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        roomNumber: '',
        treatmentType: '',
        date: '',
        content: '',
      })
    } catch {
      setError('Failed to submit spa booking. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return { formData, isSubmitting, isSuccess, error, handleChange, handleSubmit }
}
