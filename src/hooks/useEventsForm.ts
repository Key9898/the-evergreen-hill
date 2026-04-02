import { useState } from 'react'
import { createEventBooking } from '../services/inquiries'
import { useAuthContext } from '../context/AuthContext'

export type EventsFormData = {
  name: string
  phone: string
  email: string
  eventType: string
  content: string
  date: string
  guests: number
}

export function useEventsForm() {
  const { user } = useAuthContext()
  const [formData, setFormData] = useState<EventsFormData>({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    content: '',
    date: '',
    guests: 25,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'guests' ? Number(value) : value,
    }))
  }

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setIsSuccess(false)

    try {
      await createEventBooking({ ...formData, userId: user?.uid })
      setIsSuccess(true)
      setFormData({
        name: '',
        phone: '',
        email: '',
        eventType: '',
        content: '',
        date: '',
        guests: 25,
      })
    } catch {
      setError('Failed to submit event inquiry. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return { formData, isSubmitting, isSuccess, error, handleChange, handleSubmit }
}
