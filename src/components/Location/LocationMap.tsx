import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Navigation } from 'lucide-react'
import { useAnimation } from '../../hooks/useAnimation'
import { Map, MapMarker, MarkerContent, MarkerPopup, MapControls, type MapRef } from '../ui/map'

const HOTEL_LNG = 96.566666
const HOTEL_LAT = 20.633333
const VOYAGER_STYLE = 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json'
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${HOTEL_LAT},${HOTEL_LNG}`

interface LocationMapProps {
  className?: string
}

export default function LocationMap({ className = 'h-96' }: LocationMapProps) {
  const { fadeInUp } = useAnimation()
  const mapRef = useRef<MapRef>(null)

  return (
    <motion.div
      className={`relative w-full rounded-xl overflow-hidden shadow-lg ${className}`}
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-50px' }}
    >
      <Map
        ref={mapRef}
        center={[HOTEL_LNG, HOTEL_LAT]}
        zoom={14}
        className="h-full w-full"
        styles={{ light: VOYAGER_STYLE, dark: VOYAGER_STYLE }}
      >
        <MapControls showZoom showFullscreen position="top-right" />

        <MapMarker longitude={HOTEL_LNG} latitude={HOTEL_LAT}>
          <MarkerContent>
            <svg
              width="36"
              height="46"
              viewBox="0 0 36 46"
              className="-translate-x-1/2 -translate-y-full drop-shadow-lg cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 0C8.059 0 0 8.059 0 18c0 12.444 16 28 18 28S36 30.444 36 18C36 8.059 27.941 0 18 0z"
                fill="#00786f"
              />
              <circle cx="18" cy="18" r="8" fill="white" />
              <text
                x="18"
                y="22"
                textAnchor="middle"
                fontSize="10"
                fill="#00786f"
                fontWeight="bold"
              >
                H
              </text>
            </svg>
          </MarkerContent>

          <MarkerPopup closeButton offset={52} className="!bg-white !border-gray-200 !shadow-xl">
            <div className="min-w-[200px] pr-4">
              <p className="font-semibold text-sm text-gray-900 leading-tight">
                The Evergreen Hill Hotel
              </p>
              <p className="text-xs text-gray-500 mt-0.5">Kalaw, Shan State, Myanmar</p>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 hover:text-teal-700 transition-colors"
              >
                <Navigation className="w-3 h-3" />
                Get Directions
              </a>
            </div>
          </MarkerPopup>
        </MapMarker>
      </Map>

      <a
        href={DIRECTIONS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-2 bg-white text-gray-800 text-xs font-semibold px-3 py-2 rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
      >
        <Navigation className="w-3.5 h-3.5 text-teal-600" />
        Get Directions
      </a>
    </motion.div>
  )
}
