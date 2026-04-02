import { useState } from 'react'
import { createContact } from '../services/inquiries'

export type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
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
      await createContact(formData)
      setIsSuccess(true)
      reset()
    } catch {
      setError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const reset = () => setFormData({ name: '', email: '', subject: '', message: '' })

  return { formData, isSubmitting, isSuccess, error, handleChange, handleSubmit, reset }
}
