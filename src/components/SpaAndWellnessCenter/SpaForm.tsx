import { useState } from 'react'
import { motion } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useAnimation } from '../../hooks/useAnimation'

export type SpaFormData = {
  name: string
  phone: string
  email: string
  treatmentType: string
  content: string
  date: string
  roomNumber?: string
}

interface SpaFormProps {
  open?: boolean
  onClose: () => void
  onSubmit?: (data: SpaFormData) => void
}

export default function SpaForm({ open = true, onClose, onSubmit }: SpaFormProps) {
  const { fadeInUp } = useAnimation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [treatmentType, setTreatmentType] = useState('')
  const [content, setContent] = useState('')
  const [date, setDate] = useState('')
  const [roomNumber, setRoomNumber] = useState('')

  if (!open) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const payload: SpaFormData = {
      name,
      phone,
      email,
      treatmentType,
      content,
      date,
      roomNumber,
    }
    onSubmit?.(payload)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          className="w-full max-w-lg sm:max-w-xl rounded-md bg-slate-50 shadow-lg"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="px-4 sm:px-6">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2">
                <img
                  src="/Logo/logo.svg"
                  alt="The Evergreen Hill logo"
                  className="size-6 sm:size-7"
                />
                <h3 className="text-xl font-semibold text-slate-900">Schedule Your Treatment</h3>
              </div>
              <motion.button
                type="button"
                onClick={onClose}
                className="inline-flex items-center rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <XMarkIcon className="size-5" />
              </motion.button>
            </div>
            <div className="border-b border-slate-200/60" />
          </div>

          <form onSubmit={handleSubmit} className="px-4 py-4 sm:px-6 sm:py-6">
            <div className="flex items-center grid grid-cols-1 gap-3 sm:grid-cols-2">
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
              <div className="flex-1">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none"
                  placeholder="youremail@example.com"
                />
              </div>
            </div>

            <div className="mt-4 sm:mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none"
                  placeholder="+95 9xx xxx xxx"
                />
              </div>
              <div>
                <label htmlFor="roomNumber" className="block text-sm font-medium text-slate-700">
                  Room Number
                </label>
                <input
                  id="roomNumber"
                  type="text"
                  required
                  value={roomNumber}
                  onChange={(e) => setRoomNumber(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none"
                  placeholder="e.g., 215"
                />
              </div>
            </div>

            <div className="mt-4 sm:mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="treatmentType" className="block text-sm font-medium text-slate-700">
                  Treatment Type
                </label>
                <select
                  id="treatmentType"
                  name="treatmentType"
                  required
                  value={treatmentType}
                  onChange={(e) => setTreatmentType(e.target.value)}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600"
                >
                  <option value="" disabled>
                    Select treatment type
                  </option>
                  <option value="Wedding">Traditional Shan Massage</option>
                  <option value="Birthday Party">The Evergreen Aromatherapy</option>
                  <option value="Anniversary Celebration">Hot Stone Therapy</option>
                  <option value="Corporate Meeting / Workshop">Herbal Body Scrub & Wrap</option>
                  <option value="Company Retreat">Detoxifying Mud Wrap</option>
                  <option value="Executive Suite">Rejuvenating Signature Facial</option>
                  <option value="Social Gathering">Deep Cleansing Facial</option>
                  <option value="Other">The Kalaw Retreat</option>
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

            <div className="mt-4 sm:mt-6">
              <label htmlFor="content" className="block text-sm font-medium text-slate-700">
                Additional Details
              </label>
              <textarea
                id="content"
                rows={5}
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none"
                placeholder="Please mention any health conditions, allergies, areas of focus, or therapist preferences. Let us know if this is for a special occasion."
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
              <motion.button
                type="button"
                onClick={onClose}
                className="inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Cancel
              </motion.button>
              <motion.button
                type="submit"
                className="inline-flex items-center rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-600"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Booking
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
