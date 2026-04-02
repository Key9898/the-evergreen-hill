import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'

export default function OurStoryCTA({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const { fadeInUp } = useAnimation()

  return (
    <div className="bg-white py-16 pt-0 sm:py-16 sm:pt-0 lg:py-16 lg:pt-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="w-full rounded-md bg-slate-50 shadow-lg ring-1 ring-slate-900/10 overflow-hidden p-6 sm:p-10 lg:p-12 lg:flex lg:items-center lg:justify-between"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="flex-1 min-w-0">
            <h2 className="text-4xl font-semibold text-teal-700 tracking-tight">
              Built on Passion - Proven by Guests
            </h2>
            <p className="mt-6 text-lg/8 text-slate-700 sm:mt-8 lg:max-w-3xl lg:mx-0">
              The heart of our hospitality lies in our people. Get to know the team behind your
              perfect stay, and see the authentic stories our guests have shared.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
            <motion.button
              type="button"
              onClick={() => onNavigate?.('team')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-md bg-teal-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-teal-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Meet The Team
            </motion.button>
            <motion.button
              type="button"
              onClick={() => onNavigate?.('guestReviews')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-sm font-semibold text-slate-700 hover:opacity-80 hover:text-teal-800 transition-all duration-200 bg-transparent border-none cursor-pointer sm:text-base md:text-lg"
            >
              See Our Reviews
              <span aria-hidden="true">→</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
