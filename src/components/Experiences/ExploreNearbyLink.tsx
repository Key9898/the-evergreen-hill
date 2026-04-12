import { motion } from 'framer-motion'
import { TbMapPin, TbArrowRight } from 'react-icons/tb'

interface ExploreNearbyLinkProps {
  onNavigate?: (page: string) => void
}

export default function ExploreNearbyLink({ onNavigate }: ExploreNearbyLinkProps) {
  return (
    <motion.div
      className="mt-8 rounded-lg border border-teal-200 bg-gradient-to-r from-teal-50 to-emerald-50 p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="rounded-full bg-teal-100 p-2">
            <TbMapPin className="h-5 w-5 text-teal-600" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Explore Nearby Attractions</h3>
            <p className="text-sm text-slate-600">
              Discover Kalaw Central Market, Inle Lake, Pindaya Caves, and more...
            </p>
          </div>
        </div>
        <motion.button
          type="button"
          onClick={() => onNavigate?.('location')}
          className="inline-flex items-center gap-2 rounded-md bg-teal-700 px-4 py-2 font-medium text-white hover:bg-teal-600 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View Location
          <TbArrowRight className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  )
}
