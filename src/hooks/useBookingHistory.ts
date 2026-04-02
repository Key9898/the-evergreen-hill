import { useState, useEffect } from 'react'
import type { Booking, BookingStatus } from '../types/booking'
import { useAuthContext } from '../context/AuthContext'
import { getBookingsByUser, cancelBooking } from '../services/api'

interface UseBookingHistoryReturn {
  bookings: Booking[]
  isLoading: boolean
  error: string | null
  filterStatus: BookingStatus | 'all'
  setFilterStatus: (status: BookingStatus | 'all') => void
  filteredBookings: Booking[]
  handleCancelBooking: (id: string) => Promise<void>
}

export function useBookingHistory(): UseBookingHistoryReturn {
  const { user } = useAuthContext()
  const [bookings, setBookings] = useState<Booking[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [filterStatus, setFilterStatus] = useState<BookingStatus | 'all'>('all')

  useEffect(() => {
    if (!user) return
    setIsLoading(true)
    setError(null)
    getBookingsByUser(user.uid)
      .then(setBookings)
      .catch(() => setError('Failed to load booking history'))
      .finally(() => setIsLoading(false))
  }, [user])

  const handleCancelBooking = async (id: string) => {
    try {
      await cancelBooking(id)
      setBookings((prev) =>
        prev.map((b) => (b.id === id ? { ...b, status: 'cancelled' as BookingStatus } : b))
      )
    } catch {
      setError('Failed to cancel booking. Please try again.')
    }
  }

  const filteredBookings =
    filterStatus === 'all' ? bookings : bookings.filter((b) => b.status === filterStatus)

  return {
    bookings,
    isLoading,
    error,
    filterStatus,
    setFilterStatus,
    filteredBookings,
    handleCancelBooking,
  }
}
