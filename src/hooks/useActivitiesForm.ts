import { useState } from 'react'
import { createActivityBooking } from '../services/inquiries'
import { useAuthContext } from '../context/AuthContext'

export type ActivitiesFormData = {
  name: string
  phone: string
  email: string
  activityType: string
  content: string
  date: string
  person: number
  adults: number
  children: number
  childrenAges: number[]
}

export function useActivitiesForm() {
  const { user } = useAuthContext()
  const [formData, setFormData] = useState<ActivitiesFormData>({
    name: '',
    phone: '',
    email: '',
    activityType: '',
    content: '',
    date: '',
    person: 1,
    adults: 1,
    children: 0,
    childrenAges: [],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCounterChange = (field: 'adults' | 'children' | 'person', increment: boolean) => {
    setFormData((prev) => {
      const current = prev[field]
      const min = field === 'children' ? 0 : 1
      const next = increment ? current + 1 : Math.max(min, current - 1)
      if (field === 'children') {
        const ages = [...prev.childrenAges]
        if (increment && next > current) ages.push(-1)
        else if (!increment && next < current) ages.pop()
        return { ...prev, [field]: next, childrenAges: ages }
      }
      return { ...prev, [field]: next }
    })
  }

  const handleChildAgeChange = (index: number, age: number) => {
    setFormData((prev) => ({
      ...prev,
      childrenAges: prev.childrenAges.map((a, i) => (i === index ? age : a)),
    }))
  }

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setIsSuccess(false)

    try {
      await createActivityBooking({ ...formData, userId: user?.uid })
      setIsSuccess(true)
      setFormData({
        name: '',
        phone: '',
        email: '',
        activityType: '',
        content: '',
        date: '',
        person: 1,
        adults: 1,
        children: 0,
        childrenAges: [],
      })
    } catch {
      setError('Failed to submit activity booking. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const adultLabel =
    formData.adults === 0 && formData.children === 0
      ? 'Adult and Children'
      : formData.adults === 1
        ? 'Adult'
        : 'Adults'

  const childrenLabel =
    formData.adults === 0 && formData.children === 0
      ? 'Adult and Children'
      : formData.children === 1
        ? 'Child'
        : 'Children'

  return {
    formData,
    isSubmitting,
    isSuccess,
    error,
    adultLabel,
    childrenLabel,
    handleInputChange,
    handleCounterChange,
    handleChildAgeChange,
    handleSubmit,
  }
}
