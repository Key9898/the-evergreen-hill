import { useState, useEffect } from 'react'
import type { RoomType } from '../types/room'
import { createBooking } from '../services/api'
import { useAuthContext } from '../context/AuthContext'

type BookFormData = {
  checkIn: string
  checkOut: string
  adults: number
  children: number
  rooms: number
  roomType: string
  childrenAges: number[]
  name: string
  email: string
  phone: string
  specialRequests: string
  agreeToTerms: boolean
  agreeToPrivacy: boolean
}

type BookingSummary = {
  roomName: string
  checkIn: string
  checkOut: string
  adults?: number
  children?: number
  rooms: number
}

export function useBookForm(defaultRoomType?: string) {
  const { user } = useAuthContext()
  const [formData, setFormData] = useState<BookFormData>({
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
    rooms: 1,
    roomType: defaultRoomType ?? '',
    childrenAges: [],
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
    agreeToTerms: false,
    agreeToPrivacy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (defaultRoomType) {
      setFormData((prev) => ({ ...prev, roomType: defaultRoomType }))
    }
  }, [defaultRoomType])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleCounterChange = (field: 'adults' | 'children' | 'rooms', increment: boolean) => {
    setFormData((prev) => {
      const current = prev[field]
      const min = field === 'adults' || field === 'rooms' ? 1 : 0
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

  const handleSubmit = async (
    onBookingSaved?: (b: BookingSummary) => void,
    onClose?: () => void
  ) => {
    setIsSubmitting(true)
    setError(null)

    const summary: BookingSummary = {
      roomName: formData.roomType || defaultRoomType || 'Unknown Room',
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      adults: formData.adults,
      children: formData.children,
      rooms: formData.rooms,
    }

    try {
      await createBooking({
        roomType: (formData.roomType || defaultRoomType || 'Deluxe Room') as RoomType,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        adults: formData.adults,
        children: formData.children,
        childrenAges: formData.childrenAges,
        leadGuest: {
          firstName: formData.name,
          lastName: '',
          email: formData.email,
          phone: formData.phone,
          country: '',
        },
        specialRequests: formData.specialRequests,
        status: 'pending',
        userId: user?.uid ?? '',
      })

      onBookingSaved?.(summary)
      onClose?.()
    } catch {
      setError('Failed to submit booking. Please try again.')
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
    error,
    adultLabel,
    childrenLabel,
    handleInputChange,
    handleCounterChange,
    handleChildAgeChange,
    handleSubmit,
  }
}
