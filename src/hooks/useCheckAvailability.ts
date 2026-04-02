import { useState, useEffect } from 'react'

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

type ToastState = { open: boolean; title: string; lines: string[] }

function datesOverlap(aStart: string, aEnd: string, bStart: string, bEnd: string) {
  return new Date(aStart) < new Date(bEnd) && new Date(bStart) < new Date(aEnd)
}

export function useCheckAvailability() {
  const today = new Date().toISOString().split('T')[0]
  const [checkIn, setCheckIn] = useState(today)
  const [checkOut, setCheckOut] = useState(today)
  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)
  const [childrenAges, setChildrenAges] = useState<number[]>([])
  const [toast, setToast] = useState<ToastState>({ open: false, title: '', lines: [] })

  const adultLabel = adults === 1 ? 'Adult' : 'Adult'
  const childrenLabel = children === 1 ? 'Child' : 'Children'

  useEffect(() => {
    setChildrenAges((prev) => {
      if (children > prev.length) return [...prev, ...Array(children - prev.length).fill(-1)]
      if (children < prev.length) return prev.slice(0, children)
      return prev
    })
  }, [children])

  useEffect(() => {
    if (!toast.open) return
    const t = setTimeout(() => setToast({ open: false, title: '', lines: [] }), 5000)
    return () => clearTimeout(t)
  }, [toast.open])

  const handleAdultChange = (increment: boolean) =>
    setAdults((prev) => Math.max(0, increment ? prev + 1 : prev - 1))

  const handleChildrenChange = (increment: boolean) =>
    setChildren((prev) => Math.max(0, increment ? prev + 1 : prev - 1))

  const handleChildAgeChange = (index: number, age: number) =>
    setChildrenAges((prev) => prev.map((a, i) => (i === index ? age : a)))

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

  const handleSubmit = (e: React.FormEvent, onNavigate?: (page: string) => void) => {
    e.preventDefault()
    localStorage.setItem(
      'eh_check_search',
      JSON.stringify({ checkIn, checkOut, adults, children, childrenAges })
    )
    const avail = computeAvailability({ checkIn, checkOut })
    const lines = ROOM_NAMES.map((name) =>
      (avail[name] ?? ROOMS_PER_TYPE) > 0
        ? `${name}: ${avail[name]} of ${ROOMS_PER_TYPE} available`
        : `${name}: Booked fully for selected dates`
    )
    setToast({ open: true, title: `Availability for ${checkIn} → ${checkOut}`, lines })
    onNavigate?.('roomsAndSuites')
  }

  const closeToast = () => setToast({ open: false, title: '', lines: [] })

  return {
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    adults,
    children,
    childrenAges,
    adultLabel,
    childrenLabel,
    toast,
    closeToast,
    handleAdultChange,
    handleChildrenChange,
    handleChildAgeChange,
    handleSubmit,
  }
}
