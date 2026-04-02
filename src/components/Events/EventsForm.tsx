import { useState } from 'react'
import { motion } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useAnimation } from '../../hooks/useAnimation'

export type EventsFormData = {
  name: string
  phone: string
  email: string
  eventType: string
  content: string
  date: string
  guests: number
}

interface EventsFormProps {
  open?: boolean
  onClose: () => void
  onSubmit?: (data: EventsFormData) => void
}

export default function EventsForm({ open = true, onClose, onSubmit }: EventsFormProps) {
  const { fadeInUp } = useAnimation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [eventType, setEventType] = useState('')
  const [content, setContent] = useState('')
  const [date, setDate] = useState('')
  const [guests, setGuests] = useState<number>(25)

  if (!open) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const payload: EventsFormData = {
      name,
      phone,
      email,
      eventType,
      content,
      date,
      guests,
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
                <h3 className="text-xl font-semibold text-slate-900">Start Planning Your Event</h3>
              </div>
              <motion.button
                type="button"
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="inline-flex items-center rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close"
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
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none"
                  placeholder="+95 9xx xxx xxx"
                />
              </div>
              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-slate-700">
                  Type of Event
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600"
                >
                  <option value="" disabled>
                    Select event type
                  </option>
                  <option value="Wedding">Wedding</option>
                  <option value="Birthday Party">Birthday Party</option>
                  <option value="Anniversary Celebration">Anniversary Celebration</option>
                  <option value="Corporate Meeting / Workshop">Corporate Meeting / Workshop</option>
                  <option value="Company Retreat">Company Retreat</option>
                  <option value="Executive Suite">Private Dinner</option>
                  <option value="Social Gathering">Social Gathering</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-slate-700">
                  Estimated Number of Guests
                </label>
                <input
                  id="guests"
                  type="text"
                  required
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none"
                  placeholder="e.g., 50"
                />
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
                placeholder="Please share any other details, such as your preferred venue, budget, or specific requirements."
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
              <motion.button
                type="button"
                onClick={onClose}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
              >
                Cancel
              </motion.button>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-600"
              >
                Send Inquiry
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
