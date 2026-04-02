import { motion } from 'framer-motion'
import { CalendarDaysIcon, UserGroupIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useAnimation } from '../../hooks/useAnimation'
import type { BookingSummaryData } from '../../types/payment'

interface BookingSummaryProps {
  summary: BookingSummaryData
  onProceed: () => void
  onBack: () => void
}

export default function BookingSummary({ summary, onProceed, onBack }: BookingSummaryProps) {
  const { fadeInUp, staggerContainer } = useAnimation()

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
      className="max-w-2xl mx-auto p-6"
    >
      <motion.h2
        variants={fadeInUp}
        className="text-2xl font-serif font-semibold text-slate-800 mb-6"
      >
        Booking Summary
      </motion.h2>

      <motion.div
        variants={fadeInUp}
        className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
      >
        <div className="bg-gradient-to-r from-teal-700 to-emerald-700 px-6 py-4">
          <h3 className="text-white font-semibold text-lg">{summary.roomName}</h3>
          <p className="text-teal-100 text-sm">{summary.roomType}</p>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3 text-slate-700">
            <CalendarDaysIcon className="size-5 text-teal-600 shrink-0" />
            <div>
              <p className="text-sm text-slate-500">Check-in</p>
              <p className="font-medium">{formatDate(summary.checkIn)}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-slate-700">
            <CalendarDaysIcon className="size-5 text-teal-600 shrink-0" />
            <div>
              <p className="text-sm text-slate-500">Check-out</p>
              <p className="font-medium">{formatDate(summary.checkOut)}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-slate-700">
            <MoonIcon className="size-5 text-teal-600 shrink-0" />
            <div>
              <p className="text-sm text-slate-500">Duration</p>
              <p className="font-medium">
                {summary.nights} {summary.nights === 1 ? 'night' : 'nights'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-slate-700">
            <UserGroupIcon className="size-5 text-teal-600 shrink-0" />
            <div>
              <p className="text-sm text-slate-500">Guests</p>
              <p className="font-medium">
                {summary.adults} {summary.adults === 1 ? 'adult' : 'adults'}
                {summary.children > 0 &&
                  `, ${summary.children} ${summary.children === 1 ? 'child' : 'children'}`}
              </p>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4 mt-4">
            <div className="flex justify-between text-slate-600 mb-2">
              <span>
                {summary.currency} {summary.pricePerNight.toFixed(2)} × {summary.nights} nights
              </span>
              <span>
                {summary.currency} {(summary.pricePerNight * summary.nights).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between font-semibold text-slate-800 text-lg border-t border-slate-200 pt-3">
              <span>Total</span>
              <span>
                {summary.currency} {summary.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4">
            <p className="text-sm text-slate-500">Guest</p>
            <p className="font-medium text-slate-700">{summary.guestName}</p>
            <p className="text-sm text-slate-500">{summary.guestEmail}</p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="flex gap-3 mt-6">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors"
        >
          Back
        </button>
        <motion.button
          type="button"
          onClick={onProceed}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 px-6 py-3 bg-teal-700 text-white rounded-lg font-medium hover:bg-teal-800 transition-colors"
        >
          Proceed to Payment
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
