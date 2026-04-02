import { useState } from 'react'
import { motion } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useAnimation } from '../../hooks/useAnimation'

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

interface ActivitiesFormProps {
  open?: boolean
  onClose: () => void
  onSubmit?: (data: ActivitiesFormData) => void
}

export default function ActivitiesForm({ open = true, onClose, onSubmit }: ActivitiesFormProps) {
  const { fadeInUp } = useAnimation()
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

  if (!open) return null

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCounterChange = (field: 'adults' | 'children' | 'person', increment: boolean) => {
    setFormData((prev) => {
      const currentValue = prev[field]
      const min = field === 'children' ? 0 : 1
      const newValue = increment ? currentValue + 1 : Math.max(min, currentValue - 1)

      if (field === 'children') {
        const newChildrenAges = [...prev.childrenAges]
        if (increment && newValue > currentValue) {
          newChildrenAges.push(-1)
        } else if (!increment && newValue < currentValue) {
          newChildrenAges.pop()
        }
        return { ...prev, [field]: newValue, childrenAges: newChildrenAges }
      }
      return { ...prev, [field]: newValue }
    })
  }

  const handleChildAgeChange = (index: number, age: number) => {
    setFormData((prev) => ({
      ...prev,
      childrenAges: prev.childrenAges.map((currentAge: number, i: number) =>
        i === index ? age : currentAge
      ),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(formData)
    onClose()
  }

  const guestsUnselected = formData.adults === 0 && formData.children === 0
  const adultLabel = guestsUnselected
    ? 'Adult and Children'
    : formData.adults === 1
      ? 'Adult'
      : 'Adults'
  const childrenLabel = guestsUnselected
    ? 'Adult and Children'
    : formData.children === 1
      ? 'Child'
      : 'Children'

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
                <h3 className="text-lg font-semibold text-slate-900">Plan Your Adventure</h3>
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
            <div className="flex items-center">
              <div className="flex-1">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none"
                  placeholder="Your Full Name"
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
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none"
                  placeholder="+95 9xx xxx xxx"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none"
                  placeholder="youremail@example.com"
                />
              </div>
            </div>

            <div className="mt-6 sm:mt-8 border border-slate-200 rounded-lg p-4 space-y-4">
              <h3 className="text-lg font-medium text-slate-900">Guests</h3>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-slate-900">{adultLabel}</div>
                  <div className="text-sm text-slate-500">Ages 18 or above</div>
                </div>
                <div className="flex items-center gap-3">
                  <motion.button
                    type="button"
                    onClick={() => handleCounterChange('adults', false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={formData.adults <= 1}
                  >
                    −
                  </motion.button>
                  <span className="w-8 text-center font-medium">{formData.adults}</span>
                  <motion.button
                    type="button"
                    onClick={() => handleCounterChange('adults', true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-50"
                  >
                    +
                  </motion.button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-slate-900">{childrenLabel}</div>
                  <div className="text-sm text-slate-500">Ages 0-17</div>
                </div>
                <div className="flex items-center gap-3">
                  <motion.button
                    type="button"
                    onClick={() => handleCounterChange('children', false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={formData.children <= 0}
                  >
                    −
                  </motion.button>
                  <span className="w-8 text-center font-medium">{formData.children}</span>
                  <motion.button
                    type="button"
                    onClick={() => handleCounterChange('children', true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-50"
                  >
                    +
                  </motion.button>
                </div>
              </div>

              {formData.children > 0 && (
                <div className="pt-4 border-t border-slate-200">
                  <div className="text-sm text-slate-600 mb-3">
                    For accurate room pricing, make sure to enter your children's correct ages.
                  </div>
                  <div className="space-y-2">
                    {formData.childrenAges.map((age, index) => (
                      <div key={index}>
                        <label htmlFor={`childAge${index}`} className="sr-only">
                          Age of Child {index + 1}
                        </label>
                        <select
                          id={`childAge${index}`}
                          value={age}
                          onChange={(e) => handleChildAgeChange(index, parseInt(e.target.value))}
                          aria-label={`Age of Child ${index + 1}`}
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600"
                        >
                          <option value={-1} disabled>
                            Age of Child {index + 1}
                          </option>
                          {Array.from({ length: 17 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1} years old
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 sm:mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="activityType" className="block text-sm font-medium text-slate-700">
                  Activity Type
                </label>
                <select
                  id="activityType"
                  name="activityType"
                  required
                  value={formData.activityType}
                  onChange={handleInputChange}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600"
                >
                  <option value="" disabled>
                    Select activity type
                  </option>
                  <option value="Traditional Shan Massage">Half-Day Viewpoint Trek</option>
                  <option value="The Evergreen Aromatherapy">Full-Day Village Immersion</option>
                  <option value="Hot Stone Therapy">Two-Day Trek to Inle Lake</option>
                  <option value="Herbal Body Scrub & Wrap">Pine Forest Walk</option>
                  <option value="Detoxifying Mud Wrap">Sunset Hill Trek</option>
                  <option value="Rejuvenating Signature Facial">Sunset Hill Trek</option>
                  <option value="Deep Cleansing Facial">Countryside Loop Adventure</option>
                  <option value="The Kalaw Retreat">Reservoir & Viewpoint Ride</option>
                  <option value="Traditional Shan Massage">Myin Ma Hti Cave Challenge</option>
                  <option value="The Evergreen Aromatherapy">Self-Guided Bike Rental</option>
                  <option value="Hot Stone Therapy">Kalaw Market & Hnee Paya Tour</option>
                  <option value="Herbal Body Scrub & Wrap">Traditional Shan Cooking Class</option>
                  <option value="Detoxifying Mud Wrap">
                    A Visit to Green Hill Valley Elephant Camp
                  </option>
                  <option value="Rejuvenating Signature Facial">Kalaw Heritage Walk</option>
                  <option value="Deep Cleansing Facial">Local Tea Plantation Tour</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-slate-700">
                  Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={handleInputChange}
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
                name="content"
                rows={5}
                required
                value={formData.content}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none"
                placeholder="Please let us know which specific tour you are interested in. You can also include your group's fitness level, any questions you have, or other special requests."
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
                Submit Request
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
