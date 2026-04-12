import { motion } from 'framer-motion'
import { TbCalendar, TbPhone, TbMail } from 'react-icons/tb'

interface BookingCTAProps {
  onNavigate?: (page: string) => void
}

export default function BookingCTA({ onNavigate }: BookingCTAProps) {
  return (
    <motion.section
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-700 via-teal-800 to-emerald-900 p-8 sm:p-10 lg:p-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-xl">
          <motion.h3
            className="text-2xl sm:text-3xl font-semibold text-white"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Ready to Experience It All?
          </motion.h3>
          <motion.p
            className="mt-3 text-teal-100 text-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Book your stay at The Evergreen Hill and immerse yourself in the tranquility of Kalaw.
            Our team is ready to curate your perfect mountain retreat.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap gap-4 text-sm text-teal-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <TbPhone className="h-4 w-4" />
              <span>+95 81 123 456</span>
            </div>
            <div className="flex items-center gap-2">
              <TbMail className="h-4 w-4" />
              <span>reservations@evergreenhill.com</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            type="button"
            onClick={() => onNavigate?.('roomsAndSuites')}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-teal-800 shadow-lg hover:bg-teal-50 transition-colors"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <TbCalendar className="h-5 w-5" />
            Book Your Stay
          </motion.button>
          <motion.button
            type="button"
            onClick={() => onNavigate?.('contact')}
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}
