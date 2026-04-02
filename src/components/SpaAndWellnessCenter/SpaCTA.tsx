import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'

interface SpaCTAProps {
  onNavigate?: (page: string) => void
  onOpenForm?: () => void
}

export default function SpaCTA({ onNavigate, onOpenForm }: SpaCTAProps) {
  const { fadeInUp } = useAnimation()

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-6 pt-0 lg:px-8 lg:py-16 lg:pt-0">
        <motion.div
          className="relative isolate overflow-visible bg-slate-50 px-6 py-16 text-center shadow-lg rounded-md ring-1 ring-inset ring-slate-300 sm:px-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
        >
          <h2 className="text-4xl font-semibold text-teal-700 tracking-tight">
            Ready to Rejuvenate?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/6 text-slate-700">
            Our team of skilled therapists and certified trainers is ready to guide you on your
            wellness journey. Book your treatment or session in advance to secure your preferred
            time and begin your path to relaxation and vitality.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <motion.button
              type="button"
              onClick={() => (onOpenForm ? onOpenForm() : onNavigate?.('spaForm'))}
              className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs bg-teal-700 hover:bg-teal-600 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Request a Booking
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
