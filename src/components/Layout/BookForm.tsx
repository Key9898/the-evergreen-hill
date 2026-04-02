import { Dialog, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface BookFormProps {
  isOpen: boolean
  onClose: () => void
  defaultRoomType?: string
  onBookingSaved?: (booking: Booking) => void
}

type Booking = {
  roomName: string
  checkIn: string
  checkOut: string
  adults?: number
  children?: number
  rooms: number
}

export default function BookForm({
  isOpen,
  onClose,
  defaultRoomType,
  onBookingSaved,
}: BookFormProps) {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
    rooms: 1,
    roomType: defaultRoomType ?? '',
    childrenAges: [] as number[],
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
    agreeToTerms: false,
    agreeToPrivacy: false,
  })

  useEffect(() => {
    if (isOpen && defaultRoomType) {
      setFormData((prev) => ({ ...prev, roomType: defaultRoomType }))
    }
  }, [isOpen, defaultRoomType])
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
      const currentValue = prev[field]
      const newValue = increment
        ? currentValue + 1
        : Math.max(field === 'adults' || field === 'rooms' ? 1 : 0, currentValue - 1)

      // Handle children ages array
      if (field === 'children') {
        const newChildrenAges = [...prev.childrenAges]
        if (increment && newValue > currentValue) {
          newChildrenAges.push(-1) // Add new child with placeholder value
        } else if (!increment && newValue < currentValue) {
          newChildrenAges.pop() // Remove last child
        }
        return {
          ...prev,
          [field]: newValue,
          childrenAges: newChildrenAges,
        }
      }

      return {
        ...prev,
        [field]: newValue,
      }
    })
  }

  const handleChildAgeChange = (index: number, age: number) => {
    setFormData((prev) => ({
      ...prev,
      childrenAges: prev.childrenAges.map((currentAge, i) => (i === index ? age : currentAge)),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const booking: Booking = {
      roomName: formData.roomType || defaultRoomType || 'Unknown Room',
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      adults: formData.adults,
      children: formData.children,
      rooms: formData.rooms,
    }

    try {
      const raw = localStorage.getItem('eh_bookings')
      const list: Booking[] = raw ? JSON.parse(raw) : []
      list.push(booking)
      localStorage.setItem('eh_bookings', JSON.stringify(list))
    } catch {
      // If parsing/storage fails, initialize with the single booking
      localStorage.setItem('eh_bookings', JSON.stringify([booking]))
    }

    onBookingSaved?.(booking)
    onClose()
  }

  // Guests labels (compute outside JSX)
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
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="mx-auto max-w-2xl w-full bg-slate-50 rounded-md shadow-lg max-h-[90vh] overflow-y-auto">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <img alt="The Evergreen Hill Logo" src="/Logo/logo.svg" className="h-8 w-auto" />
                <h2 className="text-xl font-bold text-slate-900">Book Your Stay</h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-md p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                aria-label="Close booking form"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-6">
            {/* Booking Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="checkIn" className="block text-sm font-medium text-slate-700 mb-2">
                  Check-in Date
                </label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600"
                />
              </div>

              <div>
                <label htmlFor="checkOut" className="block text-sm font-medium text-slate-700 mb-2">
                  Check-out Date
                </label>
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600"
                />
              </div>
            </div>

            {/* Room Selection */}
            <div className="border border-slate-200 rounded-lg p-4 space-y-4">
              <h3 className="text-lg font-medium text-slate-900">Room & Guests</h3>

              {/* Room Counter */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-slate-900">Room</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleCounterChange('rooms', false)}
                    className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={formData.rooms <= 1}
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-medium">{formData.rooms}</span>
                  <button
                    type="button"
                    onClick={() => handleCounterChange('rooms', true)}
                    className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-50"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Adult Counter */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-slate-900">{adultLabel}</div>
                  <div className="text-sm text-slate-500">Ages 18 or above</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleCounterChange('adults', false)}
                    className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={formData.adults <= 1}
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-medium">{formData.adults}</span>
                  <button
                    type="button"
                    onClick={() => handleCounterChange('adults', true)}
                    className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-50"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Children Counter */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-slate-900">{childrenLabel}</div>
                  <div className="text-sm text-slate-500">Ages 0-17</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleCounterChange('children', false)}
                    className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={formData.children <= 0}
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-medium">{formData.children}</span>
                  <button
                    type="button"
                    onClick={() => handleCounterChange('children', true)}
                    className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-50"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Children Ages */}
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

            {/* Room Type Selection */}
            <div>
              <label htmlFor="roomType" className="block text-sm font-medium text-slate-700 mb-2">
                Room Type
              </label>
              <select
                id="roomType"
                name="roomType"
                value={formData.roomType}
                onChange={handleInputChange}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600"
              >
                <option value="" disabled selected>
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

            {/* Lead Guest Information */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-lg font-medium text-slate-900 mb-4">Lead Guest Information</h3>

              <div>
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mt-2 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="youremail@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 mt-2 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+95 9xx xxx xxx"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600"
                  />
                </div>
              </div>

              <div className="mt-2">
                <label
                  htmlFor="specialRequests"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Special Requests (Optional)
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={3}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600"
                  placeholder="Any special requests or preferences..."
                />
              </div>
            </div>

            {/* Terms and Privacy Policy */}
            <div className="border-t border-slate-200 pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <input
                  id="terms-service"
                  name="agreeToTerms"
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  required
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-600"
                />
                <label htmlFor="terms-service" className="block text-sm text-slate-900">
                  I agree to the Terms of Service
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="privacy-policy"
                  name="agreeToPrivacy"
                  type="checkbox"
                  checked={formData.agreeToPrivacy}
                  onChange={handleInputChange}
                  required
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-600"
                />
                <label htmlFor="privacy-policy" className="block text-sm text-slate-900">
                  I agree to the Privacy Policy
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="border-t border-slate-200 pt-6">
              <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Cancel
                </button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2 text-sm font-medium text-white bg-teal-700 border border-transparent rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Book Now
                </motion.button>
              </div>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
