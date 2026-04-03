import { motion } from 'framer-motion'
import { CheckCircleIcon, CalendarDaysIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { useAnimation } from '../../hooks/useAnimation'
import type { BookingConfirmationData } from '../../types/payment'

interface BookingConfirmationProps {
  confirmation: BookingConfirmationData
  onBackToHome: () => void
  onViewBookings: () => void
}

export default function BookingConfirmation({
  confirmation,
  onBackToHome,
  onViewBookings,
}: BookingConfirmationProps) {
  const { fadeInUp, scaleIn, staggerContainer } = useAnimation()

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="max-w-lg mx-auto p-6 text-center"
    >
      <motion.div variants={scaleIn} className="flex justify-center mb-4">
        <div className="size-20 rounded-full bg-teal-50 flex items-center justify-center">
          <CheckCircleIcon className="size-12 text-teal-600" />
        </div>
      </motion.div>

      <motion.h2
        variants={fadeInUp}
        className="text-2xl font-serif font-semibold text-slate-800 mb-2"
      >
        Booking Confirmed!
      </motion.h2>
      <motion.p variants={fadeInUp} className="text-slate-500 mb-6">
        Thank you, {confirmation.guestName}. Your reservation is confirmed.
      </motion.p>

      <motion.div
        variants={fadeInUp}
        className="bg-white rounded-xl border border-slate-200 p-6 text-left space-y-4 shadow-sm mb-6"
      >
        <div className="flex justify-between items-center pb-4 border-b border-slate-100">
          <span className="text-sm text-slate-500">Confirmation Number</span>
          <span className="font-mono font-semibold text-teal-700">
            {confirmation.confirmationNumber}
          </span>
        </div>

        <div>
          <p className="text-sm text-slate-500">Room</p>
          <p className="font-medium text-slate-800">{confirmation.roomName}</p>
        </div>

        <div className="flex items-start gap-3">
          <CalendarDaysIcon className="size-5 text-teal-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-slate-500">Check-in</p>
            <p className="font-medium text-slate-700">{formatDate(confirmation.checkIn)}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <CalendarDaysIcon className="size-5 text-teal-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-slate-500">Check-out</p>
            <p className="font-medium text-slate-700">{formatDate(confirmation.checkOut)}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <EnvelopeIcon className="size-5 text-teal-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-slate-500">Confirmation sent to</p>
            <p className="font-medium text-slate-700">{confirmation.guestEmail}</p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-slate-100">
          <span className="text-slate-500">Reference</span>
          <span className="font-mono text-sm text-teal-700">{confirmation.referenceId}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-slate-500">Total Paid</span>
          <span className="font-semibold text-slate-800 text-lg">
            {confirmation.currency} {confirmation.totalPaid.toFixed(2)}
          </span>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="flex gap-3">
        <button
          type="button"
          onClick={onViewBookings}
          className="flex-1 px-6 py-3 border border-teal-700 text-teal-700 rounded-lg font-medium hover:bg-teal-50 transition-colors"
        >
          View Bookings
        </button>
        <motion.button
          type="button"
          onClick={onBackToHome}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 px-6 py-3 bg-teal-700 text-white rounded-lg font-medium hover:bg-teal-800 transition-colors"
        >
          Back to Home
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
