import { useState, useRef } from 'react'

export type ReviewFormData = {
  name: string
  country: string
  rating: number
  content: string
  date: string
  roomType?: string
  avatarFile?: File | null
  avatarDataUrl?: string | null
}

export function useReviewsForm() {
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [roomType, setRoomType] = useState('')
  const [rating, setRating] = useState(5)
  const [content, setContent] = useState('')
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const [date, setDate] = useState('')
  const avatarFileRef = useRef<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    avatarFileRef.current = file
    if (file) {
      const reader = new FileReader()
      reader.onload = () => setAvatarPreview(reader.result as string)
      reader.readAsDataURL(file)
    } else {
      setAvatarPreview(null)
    }
  }

  const buildPayload = (): ReviewFormData => ({
    name,
    country,
    roomType,
    rating,
    content,
    date,
    avatarFile: avatarFileRef.current ?? null,
    avatarDataUrl: avatarPreview ?? null,
  })

  const reset = () => {
    setName('')
    setCountry('')
    setRoomType('')
    setRating(5)
    setContent('')
    setDate('')
    setAvatarPreview(null)
    avatarFileRef.current = null
  }

  return {
    name,
    setName,
    country,
    setCountry,
    roomType,
    setRoomType,
    rating,
    setRating,
    content,
    setContent,
    date,
    setDate,
    avatarPreview,
    handleFileChange,
    buildPayload,
    reset,
  }
}
