import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import { Map, MapMarker, MarkerContent } from '../ui/map'

interface LocationMapProps {
  className?: string
}

export default function LocationMap({ className = 'h-96' }: LocationMapProps) {
  const { fadeInUp } = useAnimation()

  return (
    <motion.div
      className={`w-full rounded-lg overflow-hidden ${className}`}
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-50px' }}
    >
      <Map center={[96.566666, 20.633333]} zoom={13} className="h-full w-full">
        <MapMarker longitude={96.566666} latitude={20.633333}>
          <MarkerContent>
            <div className="inline-flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-teal-600 rounded-full shadow-lg -translate-x-1/2 -translate-y-1/2">
              📍
            </div>
          </MarkerContent>
        </MapMarker>
      </Map>
    </motion.div>
  )
}
