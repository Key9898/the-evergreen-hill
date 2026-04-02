import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CalendarIcon, UserIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

interface CheckFormProps {
  onNavigate?: (page: string) => void
}

export default function CheckForm({ onNavigate }: CheckFormProps) {
  const today = new Date().toISOString().split('T')[0]
  const [checkIn, setCheckIn] = useState<string>(today)
  const [checkOut, setCheckOut] = useState<string>(today)
  const [adults, setAdults] = useState<number>(0)
  const [children, setChildren] = useState<number>(0)
  const [childrenAges, setChildrenAges] = useState<number[]>([])

  const handleAdultChange = (increment: boolean) => {
    setAdults((prev) => Math.max(0, increment ? prev + 1 : prev - 1))
  }
  const handleChildrenChange = (increment: boolean) => {
    setChildren((prev) => Math.max(0, increment ? prev + 1 : prev - 1))
  }

  useEffect(() => {
    setChildrenAges((prev) => {
      if (children > prev.length) {
        return [...prev, ...Array(children - prev.length).fill(-1)]
      }
      if (children < prev.length) {
        return prev.slice(0, children)
      }
      return prev
    })
  }, [children])

  const adultLabel = adults === 1 ? 'Adult' : adults >= 2 ? 'Adults' : 'Adult'
  const childrenLabel = children === 1 ? 'Child' : 'Children'

  const ROOMS_PER_TYPE = 5
  const ROOM_NAMES = [
    'Deluxe Garden View',
    'Deluxe Mountain View',
    'Honeymoon Suite',
    'The Evergreen Hill Suite',
    'Deluxe Twin Garden View',
    'Deluxe Twin Mountain View',
    'Family Suite',
    'Executive Suite',
  ]

  const datesOverlap = (aStart: string, aEnd: string, bStart: string, bEnd: string) =>
    new Date(aStart) < new Date(bEnd) && new Date(bStart) < new Date(aEnd)

  const [toast, setToast] = useState<{ open: boolean; title: string; lines: string[] }>({
    open: false,
    title: '',
    lines: [],
  })

  useEffect(() => {
    if (!toast.open) return
    const t = setTimeout(() => setToast({ open: false, title: '', lines: [] }), 5000)
    return () => clearTimeout(t)
  }, [toast.open])

  const computeAvailability = (criteria: { checkIn: string; checkOut: string }) => {
    try {
      const raw = localStorage.getItem('eh_bookings')
      const list: Array<{ roomName: string; checkIn: string; checkOut: string }> = raw
        ? JSON.parse(raw)
        : []
      const map: Record<string, number> = {}
      ROOM_NAMES.forEach((name) => {
        const count = list.filter(
          (b) =>
            b.roomName === name &&
            datesOverlap(criteria.checkIn, criteria.checkOut, b.checkIn, b.checkOut)
        ).length
        map[name] = Math.max(ROOMS_PER_TYPE - count, 0)
      })
      return map
    } catch {
      const fallback: Record<string, number> = {}
      ROOM_NAMES.forEach((name) => (fallback[name] = ROOMS_PER_TYPE))
      return fallback
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const criteria = { checkIn, checkOut, adults, children, childrenAges }
    localStorage.setItem('eh_check_search', JSON.stringify(criteria))

    const avail = computeAvailability({ checkIn, checkOut })
    const lines = ROOM_NAMES.map((name) =>
      (avail[name] ?? ROOMS_PER_TYPE) > 0
        ? `${name}: ${avail[name]} of ${ROOMS_PER_TYPE} available`
        : `${name}: Booked fully for selected dates`
    )

    setToast({
      open: true,
      title: `Availability for ${checkIn} → ${checkOut}`,
      lines,
    })

    onNavigate?.('roomsAndSuites')
  }

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="rounded-md bg-white backdrop-blur-md shadow-lg ring-1 ring-white/20"
      >
        <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col">
            <label htmlFor="check-in" className="text-sm font-medium text-teal-600 mb-1">
              Check-in
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-teal-700">
                <CalendarIcon className="h-4 w-4" />
              </span>
              <input
                id="check-in"
                name="check-in"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                placeholder="dd/mm/yyyy"
                title="Select check-in date"
                required
                className="w-full h-12 rounded-md border border-slate-300 bg-white/90 pl-9 pr-3 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="check-out" className="text-sm font-medium text-teal-600 mb-1">
              Check-out
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-teal-700">
                <CalendarIcon className="h-4 w-4" />
              </span>
              <input
                id="check-out"
                name="check-out"
                type="date"
                value={checkOut}
                min={checkIn}
                onChange={(e) => setCheckOut(e.target.value)}
                placeholder="dd/mm/yyyy"
                title="Select check-out date"
                required
                className="w-full h-12 rounded-md border border-slate-300 bg-white/90 pl-9 pr-3 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="adults-counter" className="text-sm font-medium text-teal-600 mb-1">
              {adultLabel}
            </label>
            <div className="relative h-12 rounded-md border border-slate-300 bg-white/90 px-3">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-teal-700">
                <UserIcon className="h-4 w-4 text-teal-700" />
              </span>
              <div className="absolute inset-y-0 right-3 flex items-center gap-2">
                <motion.button
                  type="button"
                  id="adults-counter"
                  onClick={() => handleAdultChange(false)}
                  aria-label="Decrease adults"
                  className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-teal-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-teal-600"
                  disabled={adults <= 0}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MinusIcon className="h-4 w-4" />
                </motion.button>
                <span className="w-10 text-center text-base font-medium text-slate-900">
                  {adults}
                </span>
                <motion.button
                  type="button"
                  onClick={() => handleAdultChange(true)}
                  aria-label="Increase adults"
                  className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-teal-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <PlusIcon className="h-4 w-4" />
                </motion.button>
              </div>
              <input type="hidden" name="adults" value={adults} />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="children-counter" className="text-sm font-medium text-teal-600 mb-1">
              {childrenLabel}
            </label>
            <div className="relative h-12 rounded-md border border-slate-300 bg-white/90 px-3">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-teal-700">
                <UserIcon className="h-4 w-4 text-teal-700" />
              </span>
              <div className="absolute inset-y-0 right-3 flex items-center gap-2">
                <motion.button
                  type="button"
                  id="children-counter"
                  onClick={() => handleChildrenChange(false)}
                  aria-label="Decrease children"
                  className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-teal-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-teal-600"
                  disabled={children <= 0}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MinusIcon className="h-4 w-4" />
                </motion.button>
                <span className="w-10 text-center text-base font-medium text-slate-900">
                  {children}
                </span>
                <motion.button
                  type="button"
                  onClick={() => handleChildrenChange(true)}
                  aria-label="Increase children"
                  className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-teal-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <PlusIcon className="h-4 w-4" />
                </motion.button>
              </div>
              <input type="hidden" name="children" value={children} />
            </div>
          </div>

          {children > 0 && (
            <div className="sm:col-span-2 lg:col-span-5 pt-4 border-t border-white/20">
              <div className="text-xs text-slate-700 mb-3">
                For accurate room pricing, make sure to enter your children's correct ages.
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {childrenAges.map((age, index) => (
                  <div key={index}>
                    <label htmlFor={`childAge${index}`} className="sr-only">
                      Age of Child {index + 1}
                    </label>
                    <select
                      id={`childAge${index}`}
                      value={age}
                      onChange={(e) => {
                        const val = parseInt(e.target.value)
                        setChildrenAges((prev) => prev.map((a, i) => (i === index ? val : a)))
                      }}
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

          <div className="flex items-end">
            <motion.button
              type="submit"
              className="w-full h-12 rounded-md bg-teal-700 text-white text-base font-semibold hover:bg-teal-600 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Check Now
            </motion.button>
          </div>
        </div>
      </form>

      {toast.open && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] rounded-md border border-slate-200 bg-teal-50 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
            <p className="text-base font-medium text-teal-700">{toast.title}</p>
            <button
              type="button"
              onClick={() => setToast({ open: false, title: '', lines: [] })}
              className="rounded-md p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
              aria-label="Close availability toast"
            >
              ×
            </button>
          </div>
          <div className="p-3 max-h-64 overflow-y-auto">
            <ul className="space-y-1">
              {toast.lines.map((line, idx) => {
                const isFullyBooked = /Booked fully/.test(line)
                return (
                  <li
                    key={idx}
                    className={`text-sm ${isFullyBooked ? 'text-red-700' : 'text-slate-700'}`}
                  >
                    {line}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
