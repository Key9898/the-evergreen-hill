import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import { XMarkIcon, UserCircleIcon } from '@heroicons/react/24/solid'

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

interface ReviewsFormProps {
  open: boolean
  onClose: () => void
  onSubmit?: (data: ReviewFormData) => void
}

export default function ReviewsForm({ open, onClose, onSubmit }: ReviewsFormProps) {
  const { fadeInUp } = useAnimation()
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [roomType, setRoomType] = useState('')
  const [rating, setRating] = useState(5)
  const [content, setContent] = useState('')
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const avatarFileRef = useRef<File | null>(null)
  const [date, setDate] = useState('')

  if (!open) return null

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const payload: ReviewFormData = {
      name,
      country,
      roomType,
      rating,
      content,
      date,
      avatarFile: avatarFileRef.current ?? null,
      avatarDataUrl: avatarPreview ?? null,
    }
    onSubmit?.(payload)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          className="w-full max-w-lg sm:max-w-xl rounded-md bg-slate-50 shadow-lg"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          {/* Header */}
          <div className="px-4 sm:px-6">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2">
                <img
                  src="/Logo/logo.svg"
                  alt="The Evergreen Hill logo"
                  className="size-6 sm:size-7"
                />
                <h3 className="text-xl font-semibold text-slate-900">Write a Review</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close"
              >
                <XMarkIcon className="size-5" />
              </button>
            </div>
            {/* separator that matches body width */}
            <div className="border-b border-slate-200/60" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-4 py-4 sm:px-6 sm:py-6">
            {/* Avatar + Name (inline) */}
            <div className="flex items-center gap-4">
              {avatarPreview ? (
                <img
                  src={avatarPreview}
                  alt="Avatar preview"
                  className="size-16 rounded-full object-cover"
                />
              ) : (
                <div className="size-16 rounded-full bg-slate-100 flex items-center justify-center">
                  <UserCircleIcon className="size-10 text-slate-400" />
                </div>
              )}
              <div className="flex-1">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none"
                  placeholder="Your Full Name"
                />
              </div>
            </div>

            {/* Country + Room Type */}
            <div className="mt-4 sm:mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-slate-700">
                  City or Country
                </label>
                <input
                  id="country"
                  type="text"
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none"
                  placeholder="e.g., Yangon or Myanmar"
                />
              </div>
              <div>
                <label htmlFor="roomType" className="block text-sm font-medium text-slate-700">
                  Room Type
                </label>
                <select
                  id="roomType"
                  name="roomType"
                  required
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600"
                >
                  <option value="" disabled>
                    Select room type
                  </option>
                  <option value="Deluxe Garden View">Deluxe Garden View</option>
                  <option value="Deluxe Mountain View">Deluxe Mountain View</option>
                  <option value="Deluxe Twin Garden View">Deluxe Twin Garden View</option>
                  <option value="Deluxe Twin Mountain View">Deluxe Twin Mountain View</option>
                  <option value="Family Suite">Family Suite</option>
                  <option value="Executive Suite">Executive Suite</option>
                  <option value="Honeymoon Suite">Honeymoon Suite</option>
                  <option value="The Evergreen Hill Suite">The Evergreen Hill Suite</option>
                </select>
              </div>
            </div>

            {/* Rating + Date */}
            <div className="mt-4 sm:mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-slate-700">
                  Rating
                </label>
                <select
                  id="rating"
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 focus:border-teal-600 focus:outline-none"
                >
                  {[5, 4, 3, 2, 1].map((r) => (
                    <option key={r} value={r}>
                      {r} stars
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-slate-700">
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  max={new Date().toISOString().split('T')[0]}
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 focus:border-teal-600 focus:outline-none"
                />
              </div>
            </div>

            {/* Content */}
            <div className="mt-4 sm:mt-6">
              <label htmlFor="content" className="block text-sm font-medium text-slate-700">
                Your Review
              </label>
              <textarea
                id="content"
                rows={5}
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none"
                placeholder="Share your experience..."
              />
            </div>

            {/* Optional photo upload */}
            <div className="mt-4 sm:mt-6">
              <label htmlFor="avatar" className="block text-sm font-medium text-slate-700">
                Choose your photo (optional)
              </label>
              <input
                id="avatar"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-slate-600 file:mr-4 file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:text-sm file:font-medium hover:file:bg-slate-200"
              />
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
              >
                Cancel
              </button>
              <motion.button
                type="submit"
                className="inline-flex items-center rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-600"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Review
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
