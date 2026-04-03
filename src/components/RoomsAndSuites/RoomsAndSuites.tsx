import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  WifiIcon,
  TvIcon,
  ShieldCheckIcon,
  HomeIcon,
  SparklesIcon,
  EyeIcon,
} from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'
import { LuCoffee } from 'react-icons/lu'
import { StarIcon } from '@heroicons/react/20/solid'
import { Header } from '../Layout'
import { Footer } from '../Layout'
import { ScrollToTopButton } from '../Layout'
import RoomsSuitesBanner from './RoomsAndSuitesBanner'
import RoomsSuitesPagination from './RoomsAndSuitesPagination'
import { BookForm as BookNowForm } from '../Layout'
const DeluxeGardenViewImg = '/RoomsAndSuites/deluxe_garden_view.jpg'
const DeluxeMountainViewImg = '/RoomsAndSuites/deluxe_mountain_view.jpg'
const HoneymoonSuiteImg = '/RoomsAndSuites/honeymoon_suite.jpg'
const TheEvergreenHillSuiteImg = '/RoomsAndSuites/the_evergreen_hill_suite.jpg'
const DeluxeTwinGardenViewImg = '/RoomsAndSuites/deluxe_twin_garden_view.jpg'
const DeluxeTwinMountainViewImg = '/RoomsAndSuites/deluxe_twin_mountain_view.jpg'
const FamilySuiteImg = '/RoomsAndSuites/family_suite.jpg'
const ExecutiveSuiteImg = '/RoomsAndSuites/executive_suite.jpg'
import ViewDetails from './ViewDetails'

const ROOMS_PER_TYPE = 5

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const standardItemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
}

type Booking = {
  roomName: string
  checkIn: string
  checkOut: string
  adults?: number
  children?: number
  rooms: number
}

const getFeatureIcon = (featureKey: string) => {
  switch (featureKey) {
    case 'freeWifi':
      return <WifiIcon className="h-4 w-4" />
    case 'smartTv':
      return <TvIcon className="h-4 w-4" />
    case 'coffeeTeaMaker':
      return <LuCoffee className="h-4 w-4" />
    case 'privateBathroom':
      return <HomeIcon className="h-4 w-4" />
    case 'gardenView':
      return <EyeIcon className="h-4 w-4" />
    case 'mountainView':
      return <EyeIcon className="h-4 w-4" />
    case 'privateBalcony':
      return <HomeIcon className="h-4 w-4" />
    case 'livingArea':
      return <HomeIcon className="h-4 w-4" />
    case 'premiumAmenities':
      return <SparklesIcon className="h-4 w-4" />
    case 'panoramicView':
      return <EyeIcon className="h-4 w-4" />
    case 'privateJacuzzi':
      return <SparklesIcon className="h-4 w-4" />
    case 'romanticSetting':
      return <SparklesIcon className="h-4 w-4" />
    case 'butlerService':
      return <SparklesIcon className="h-4 w-4" />
    case 'luxuryAmenities':
      return <SparklesIcon className="h-4 w-4" />
    case 'familyFriendly':
      return <HomeIcon className="h-4 w-4" />
    default:
      return <ShieldCheckIcon className="h-4 w-4" />
  }
}

interface RoomsSuitesProps {
  onNavigate?: (page: string) => void
}

export default function RoomsSuites({ onNavigate }: RoomsSuitesProps) {
  const { t } = useTranslation()

  const rooms = [
    {
      id: 1,
      nameKey: 'deluxeGarden',
      type: 'Room',
      price: 'From 350,000 MMK/night',
      guests: '2 Guests',
      size: '35 sqm',
      features: [
        'freeWifi',
        'smartTv',
        'coffeeTeaMaker',
        'airConditioning',
        'privateBathroom',
        'gardenView',
      ],
      imageAlt: 'Deluxe Garden View',
      imageUrl: DeluxeGardenViewImg,
    },
    {
      id: 2,
      nameKey: 'deluxeMountain',
      type: 'Room',
      price: 'From 450,000 MMK/night',
      guests: '2 Guests',
      size: '40 sqm',
      features: [
        'freeWifi',
        'smartTv',
        'coffeeTeaMaker',
        'airConditioning',
        'privateBalcony',
        'mountainView',
      ],
      imageAlt: 'Deluxe Mountain View',
      imageUrl: DeluxeMountainViewImg,
    },
    {
      id: 3,
      nameKey: 'honeymoonSuite',
      type: 'Suite',
      price: 'From 950,000 MMK/night',
      guests: '2 Guests',
      size: '70 sqm',
      features: [
        'freeWifi',
        'smartTv',
        'coffeeTeaMaker',
        'airConditioning',
        'privateJacuzzi',
        'romanticSetting',
      ],
      imageAlt: 'Honeymoon Suite',
      imageUrl: HoneymoonSuiteImg,
    },
    {
      id: 4,
      nameKey: 'evergreenSuite',
      type: 'Suite',
      price: 'From 1,350,000 MMK/night',
      guests: '4 Guests',
      size: '95 sqm',
      features: [
        'freeWifi',
        'smartTv',
        'coffeeTeaMaker',
        'airConditioning',
        'butlerService',
        'luxuryAmenities',
      ],
      imageAlt: 'The Evergreen Hill Suite',
      imageUrl: TheEvergreenHillSuiteImg,
    },
    {
      id: 5,
      nameKey: 'deluxeTwinGarden',
      type: 'Room',
      price: 'From 350,000 MMK/night',
      guests: '2 Guests',
      size: '35 sqm',
      features: [
        'freeWifi',
        'smartTv',
        'coffeeTeaMaker',
        'airConditioning',
        'privateBathroom',
        'gardenView',
      ],
      imageAlt: 'Deluxe Twin Garden View',
      imageUrl: DeluxeTwinGardenViewImg,
    },
    {
      id: 6,
      nameKey: 'deluxeTwinMountain',
      type: 'Room',
      price: 'From 450,000 MMK/night',
      guests: '2 Guests',
      size: '40 sqm',
      features: [
        'freeWifi',
        'smartTv',
        'coffeeTeaMaker',
        'airConditioning',
        'privateBathroom',
        'mountainView',
      ],
      imageAlt: 'Deluxe Twin Mountain View',
      imageUrl: DeluxeTwinMountainViewImg,
    },
    {
      id: 7,
      nameKey: 'familySuite',
      type: 'Suite',
      price: 'From 650,000 MMK/night',
      guests: '4 Guests',
      size: '65 sqm',
      features: [
        'freeWifi',
        'smartTv',
        'coffeeTeaMaker',
        'airConditioning',
        'livingArea',
        'familyFriendly',
      ],
      imageAlt: 'Family Suite',
      imageUrl: FamilySuiteImg,
    },
    {
      id: 8,
      nameKey: 'executiveSuite',
      type: 'Suite',
      price: 'From 800,000 MMK/night',
      guests: '2 Guests',
      size: '55 sqm',
      features: [
        'freeWifi',
        'smartTv',
        'coffeeTeaMaker',
        'airConditioning',
        'premiumAmenities',
        'panoramicView',
      ],
      imageAlt: 'Executive Suite',
      imageUrl: ExecutiveSuiteImg,
    },
  ]

  const getRoomName = (nameKey: string) => t(`rooms.roomTypes.${nameKey}`)
  const getRoomDescription = (nameKey: string) => t(`rooms.roomDescriptions.${nameKey}`)
  // Pagination state and derived data
  const postsPerPage = 4
  const [currentPage, setCurrentPage] = useState(1)
  const filteredPosts = rooms
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentRooms = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const handlePageChange = (page: number) => setCurrentPage(page)

  const [bookFormOpen, setBookFormOpen] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState('')

  // Details modal state
  type Room = (typeof rooms)[number] & { name?: string; description?: string; gallery?: string[] }
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [detailsRoom, setDetailsRoom] = useState<Room | null>(null)
  const openDetails = (room: Room) => {
    setDetailsRoom({
      ...room,
      name: getRoomName(room.nameKey),
      description: getRoomDescription(room.nameKey),
    })
    setDetailsOpen(true)
  }
  const closeDetails = () => {
    setDetailsOpen(false)
    setDetailsRoom(null)
  }

  const handleBookNowClick = (roomName: string) => {
    setSelectedRoom(roomName)
    setBookFormOpen(true)
  }

  // Availability: read saved search criteria and existing bookings
  const [searchCriteria, setSearchCriteria] = useState<{
    checkIn: string
    checkOut: string
  } | null>(null)
  const [bookings, setBookings] = useState<Booking[]>([])
  const [availability, setAvailability] = useState<Record<string, number>>({})

  useEffect(() => {
    try {
      const raw = localStorage.getItem('eh_check_search')
      setSearchCriteria(raw ? JSON.parse(raw) : null)
    } catch {
      setSearchCriteria(null)
    }
  }, [])

  useEffect(() => {
    try {
      const raw = localStorage.getItem('eh_bookings')
      setBookings(raw ? JSON.parse(raw) : [])
    } catch {
      setBookings([])
    }
  }, [bookFormOpen])

  const datesOverlap = (aStart: string, aEnd: string, bStart: string, bEnd: string) =>
    new Date(aStart) < new Date(bEnd) && new Date(bStart) < new Date(aEnd)

  useEffect(() => {
    if (!searchCriteria) {
      setAvailability({})
      return
    }
    const map: Record<string, number> = {}
    rooms.forEach((r) => {
      const roomName = getRoomName(r.nameKey)
      const count = bookings.reduce((acc, b) => {
        if (
          b.roomName === roomName &&
          datesOverlap(searchCriteria.checkIn, searchCriteria.checkOut, b.checkIn, b.checkOut)
        ) {
          return acc + (typeof b.rooms === 'number' ? b.rooms : 1)
        }
        return acc
      }, 0)
      map[r.nameKey] = Math.max(ROOMS_PER_TYPE - count, 0)
    })
    setAvailability(map)
  }, [searchCriteria, bookings])

  // Dynamic rating/reviews from GuestReviews (localStorage)
  const [roomStats, setRoomStats] = useState<Record<string, { avg: number; count: number }>>({})
  const normalizeName = (s: string) => s.toLowerCase().trim()

  useEffect(() => {
    try {
      const raw = localStorage.getItem('eh_featured_reviews')
      const list: Array<{ rating?: number; roomType?: string }> = raw ? JSON.parse(raw) : []
      const sumMap = new Map<string, { sum: number; count: number }>()
      for (const r of list) {
        if (!r || !r.roomType || typeof r.rating !== 'number') continue
        const key = normalizeName(r.roomType)
        const entry = sumMap.get(key) ?? { sum: 0, count: 0 }
        entry.sum += r.rating
        entry.count += 1
        sumMap.set(key, entry)
      }
      const out: Record<string, { avg: number; count: number }> = {}
      for (const [key, { sum, count }] of sumMap.entries()) {
        out[key] = { avg: count ? sum / count : 0, count }
      }
      setRoomStats(out)
    } catch {
      setRoomStats({})
    }
  }, [])
  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} activePage="roomsAndSuites" />
      <div className="relative -mt-40 sm:-mt-44 lg:-mt-48">
        <RoomsSuitesBanner onNavigate={onNavigate} />
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-teal-600 mt-46 sm:mt-26 lg:mt-8 mb-6">
            {t('rooms.findYourSerenity')}
          </h2>
          <p className="text-lg/8 text-slate-700 max-w-3xl mx-auto">
            {t('rooms.findYourSerenityDesc')}
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {currentRooms.map((room) => (
            <motion.div
              key={room.id}
              className="group relative overflow-hidden rounded-md bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Room Image */}
              <div className="relative h-64 sm:h-72 group overflow-hidden rounded-md">
                <img
                  src={room.imageUrl}
                  alt={getRoomName(room.nameKey)}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-md bg-teal-700/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {room.type}
                  </span>
                </div>
                {roomStats[normalizeName(getRoomName(room.nameKey))] &&
                roomStats[normalizeName(getRoomName(room.nameKey))].count > 0 ? (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <StarIcon className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm font-medium text-slate-900">
                        {roomStats[normalizeName(getRoomName(room.nameKey))].avg.toFixed(1)}
                      </span>
                      <span className="text-xs text-slate-600">
                        ({roomStats[normalizeName(getRoomName(room.nameKey))].count})
                      </span>
                    </div>
                  </div>
                ) : null}
              </div>

              {/* Room Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-teal-700 mb-1">
                      {getRoomName(room.nameKey)}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-slate-600">
                      <span>{room.guests}</span>
                      <span>•</span>
                      <span>{room.size}</span>
                    </div>
                    <div className="mt-2">
                      {(availability[room.nameKey] ?? ROOMS_PER_TYPE) > 0 ? (
                        <span className="inline-flex items-center rounded-md bg-teal-50  hover:bg-teal-100 text-slate-600 px-2 py-1 text-base">
                          {t('rooms.availableCount', {
                            count: availability[room.nameKey] ?? ROOMS_PER_TYPE,
                            total: ROOMS_PER_TYPE,
                          })}
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-md bg-red-100 text-red-700 px-2 py-1 text-base">
                          {t('rooms.fullyBooked')}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-teal-700">{room.price}</p>
                  </div>
                </div>

                <p className="text-slate-600 mb-4 text-lg/6 leading-relaxed">
                  {getRoomDescription(room.nameKey)}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-base font-medium text-teal-700 mb-3">
                    {t('rooms.roomFeatures')}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {room.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-sm text-teal-700"
                      >
                        {getFeatureIcon(feature)}
                        <span>{t(`rooms.features.${feature}`)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.button
                    type="button"
                    className="flex-1 bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => handleBookNowClick(getRoomName(room.nameKey))}
                    disabled={
                      Boolean(searchCriteria) &&
                      (availability[room.nameKey] ?? ROOMS_PER_TYPE) === 0
                    }
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('rooms.bookNow')}
                  </motion.button>
                  <motion.button
                    type="button"
                    className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium"
                    onClick={() => openDetails(room)}
                    whileHover={{ scale: 1.02, backgroundColor: '#f8fafc' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('rooms.viewDetails')}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        <RoomsSuitesPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalPosts={filteredPosts.length}
          postsPerPage={postsPerPage}
        />
        {/* ViewDetails */}
        <ViewDetails open={detailsOpen} onClose={closeDetails} room={detailsRoom} />
        {/* Additional Information */}
        <motion.div
          className="mt-16 bg-slate-50 rounded-md shadow-lg p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <div className="text-center mb-8">
            <h3 className="text-4xl font-semibold text-teal-700 mb-4">
              {t('rooms.standard.title')}
            </h3>
            <p className="text-lg/6 text-slate-700 max-w-2xl mx-auto">
              {t('rooms.standard.description')}
            </p>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.div
              className="text-center"
              variants={standardItemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 bg-teal-100 rounded-md flex items-center justify-center mx-auto mb-3">
                <WifiIcon className="h-6 w-6 text-teal-700" />
              </div>
              <h4 className="font-medium text-teal-700 mb-1">{t('rooms.standard.wifiTitle')}</h4>
              <p className="text-sm text-slate-700">{t('rooms.standard.wifiDesc')}</p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={standardItemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 bg-teal-100 rounded-md flex items-center justify-center mx-auto mb-3">
                <TvIcon className="h-6 w-6 text-teal-700" />
              </div>
              <h4 className="font-medium text-teal-700 mb-1">{t('rooms.standard.tvTitle')}</h4>
              <p className="text-sm text-slate-700">{t('rooms.standard.tvDesc')}</p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={standardItemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 bg-teal-100 rounded-md flex items-center justify-center mx-auto mb-3">
                <LuCoffee className="h-6 w-6 text-teal-700" />
              </div>
              <h4 className="font-medium text-teal-700 mb-1">{t('rooms.standard.coffeeTitle')}</h4>
              <p className="text-sm text-slate-700">{t('rooms.standard.coffeeDesc')}</p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={standardItemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 bg-teal-100 rounded-md flex items-center justify-center mx-auto mb-3">
                <ShieldCheckIcon className="h-6 w-6 text-teal-700" />
              </div>
              <h4 className="font-medium text-teal-700 mb-1">{t('rooms.standard.serviceTitle')}</h4>
              <p className="text-sm text-slate-700">{t('rooms.standard.serviceDesc')}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <ScrollToTopButton />
      <Footer onNavigate={onNavigate} />

      {/* Book Form Modal */}
      {bookFormOpen && (
        <BookNowForm
          isOpen={bookFormOpen}
          onClose={() => setBookFormOpen(false)}
          defaultRoomType={selectedRoom}
          onBookingSaved={(booking) => {
            setBookings((prev) => [...prev, booking])
          }}
        />
      )}
    </div>
  )
}
