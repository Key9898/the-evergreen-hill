import { motion } from 'framer-motion'
import { CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/outline'
import { useAnimation } from '../../hooks/useAnimation'
import { useBookingHistory } from '../../hooks/useBookingHistory'
import type { BookingStatus } from '../../types/booking'

interface BookingHistoryProps {
  onNavigate?: (page: string) => void
}

const statusColors: Record<BookingStatus, string> = {
  pending: 'bg-amber-100 text-amber-700',
  confirmed: 'bg-teal-100 text-teal-700',
  cancelled: 'bg-red-100 text-red-700',
  completed: 'bg-slate-100 text-slate-600',
}

const filterOptions: Array<{ label: string; value: BookingStatus | 'all' }> = [
  { label: 'All', value: 'all' },
  { label: 'Pending', value: 'pending' },
  { label: 'Confirmed', value: 'confirmed' },
  { label: 'Completed', value: 'completed' },
  { label: 'Cancelled', value: 'cancelled' },
]

export default function BookingHistory({ onNavigate }: BookingHistoryProps) {
  const { fadeInUp, staggerContainer } = useAnimation()
  const { isLoading, error, filterStatus, setFilterStatus, filteredBookings } = useBookingHistory()

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="min-h-screen bg-slate-50 py-12 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div variants={fadeInUp} className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-serif font-semibold text-slate-800">Booking History</h1>
          <button
            type="button"
            onClick={() => onNavigate?.('profile')}
            className="text-sm text-teal-600 hover:text-teal-700 font-medium"
          >
            ← Back to Profile
          </button>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex gap-2 mb-6 flex-wrap">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setFilterStatus(opt.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filterStatus === opt.value
                  ? 'bg-teal-700 text-white'
                  : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </motion.div>

        {isLoading && (
          <div className="flex items-center justify-center py-16">
            <ClockIcon className="size-8 text-slate-300 animate-spin" />
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-700 text-sm">
            {error}
          </div>
        )}

        {!isLoading && !error && filteredBookings.length === 0 && (
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-xl border border-slate-200 p-12 text-center"
          >
            <CalendarDaysIcon className="size-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 font-medium">No bookings found</p>
            <p className="text-slate-400 text-sm mt-1">
              {filterStatus === 'all'
                ? "You haven't made any bookings yet."
                : `No ${filterStatus} bookings.`}
            </p>
            <button
              type="button"
              onClick={() => onNavigate?.('roomsAndSuites')}
              className="mt-4 px-6 py-2.5 bg-teal-700 text-white rounded-lg text-sm font-medium hover:bg-teal-800 transition-colors"
            >
              Browse Rooms
            </button>
          </motion.div>
        )}

        <div className="space-y-4">
          {filteredBookings.map((booking, index) => (
            <motion.div
              key={booking.id}
              variants={fadeInUp}
              custom={index}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-semibold text-slate-800">{booking.roomType}</p>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">#{booking.id}</p>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${statusColors[booking.status]}`}
                >
                  {booking.status}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CalendarDaysIcon className="size-4 text-teal-600" />
                  <span>
                    {new Date(booking.checkIn).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })}
                    {' → '}
                    {new Date(booking.checkOut).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <span>
                  {booking.adults} {booking.adults === 1 ? 'adult' : 'adults'}
                  {booking.children > 0 && `, ${booking.children} children`}
                </span>
              </div>
              {booking.totalPrice !== undefined && (
                <p className="text-right text-slate-700 font-semibold mt-3">
                  USD {booking.totalPrice.toFixed(2)}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
