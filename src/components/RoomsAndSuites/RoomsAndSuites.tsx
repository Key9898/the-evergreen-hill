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
import { useState, useMemo, useCallback, useEffect } from 'react'
import { LuCoffee } from 'react-icons/lu'
import { StarIcon } from '@heroicons/react/20/solid'
import { Header } from '../Layout'
import { Footer } from '../Layout'
import { ScrollToTopButton } from '../Layout'
import RoomsSuitesBanner from './RoomsAndSuitesBanner'
import RoomsSuitesPagination from './RoomsAndSuitesPagination'
import { BookForm as BookNowForm } from '../Layout'
import ViewDetails from './ViewDetails'
import { ROOMS_PER_TYPE, ROOM_DATA } from '../../constants/rooms'
import { useFirestoreBookings, type SearchCriteria } from '../../hooks/useFirestoreBookings'
import { useFirestoreReviews } from '../../hooks/useFirestoreReviews'
import { getSearchCriteriaFromStorage } from '../../utils/availability'

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

  const rooms = useMemo(
    () =>
      ROOM_DATA.map((room) => ({
        ...room,
        name: t(`rooms.roomTypes.${room.nameKey}`),
        description: t(`rooms.roomDescriptions.${room.nameKey}`),
      })),
    [t]
  )

  const getRoomName = useCallback((nameKey: string) => t(`rooms.roomTypes.${nameKey}`), [t])
  const getRoomDescription = useCallback(
    (nameKey: string) => t(`rooms.roomDescriptions.${nameKey}`),
    [t]
  )

  const [roomTypeFilter, setRoomTypeFilter] = useState<'all' | 'Room' | 'Suite'>('all')
  const [priceSort, setPriceSort] = useState<'default' | 'low-to-high' | 'high-to-low'>('default')

  const filteredAndSortedRooms = useMemo(() => {
    let result = rooms
    if (roomTypeFilter !== 'all') {
      result = result.filter((room) => room.type === roomTypeFilter)
    }
    if (priceSort !== 'default') {
      result = [...result].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''), 10)
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''), 10)
        return priceSort === 'low-to-high' ? priceA - priceB : priceB - priceA
      })
    }
    return result
  }, [rooms, roomTypeFilter, priceSort])

  const postsPerPage = 4
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(filteredAndSortedRooms.length / postsPerPage)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentRooms = useMemo(
    () => filteredAndSortedRooms.slice(indexOfFirstPost, indexOfLastPost),
    [filteredAndSortedRooms, indexOfFirstPost, indexOfLastPost]
  )
  const handlePageChange = (page: number) => setCurrentPage(page)

  useEffect(() => {
    setCurrentPage(1)
  }, [roomTypeFilter, priceSort])

  const [bookFormOpen, setBookFormOpen] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState('')

  type Room = (typeof rooms)[number] & { gallery?: string[] }
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [detailsRoom, setDetailsRoom] = useState<Room | null>(null)
  const openDetails = useCallback(
    (room: (typeof rooms)[number]) => {
      setDetailsRoom({
        ...room,
        name: getRoomName(room.nameKey),
        description: getRoomDescription(room.nameKey),
      })
      setDetailsOpen(true)
    },
    [getRoomName, getRoomDescription]
  )
  const closeDetails = () => {
    setDetailsOpen(false)
    setDetailsRoom(null)
  }

  const handleBookNowClick = (roomName: string) => {
    setSelectedRoom(roomName)
    setBookFormOpen(true)
  }

  const { computeAllAvailability } = useFirestoreBookings()
  const { computeRoomStats } = useFirestoreReviews()

  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria | null>(null)

  useEffect(() => {
    setSearchCriteria(getSearchCriteriaFromStorage())
  }, [])

  const availability = useMemo(() => {
    if (!searchCriteria) return {}
    const roomNameKeys = ROOM_DATA.map((r) => r.nameKey)
    return computeAllAvailability(roomNameKeys, searchCriteria)
  }, [searchCriteria, computeAllAvailability])

  const roomStats = useMemo(() => computeRoomStats(), [computeRoomStats])
  const normalizeName = (s: string) => s.toLowerCase().trim()

  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} activePage="roomsAndSuites" />
      <div className="relative -mt-40 sm:-mt-44 lg:-mt-48 z-10">
        <RoomsSuitesBanner onNavigate={onNavigate} />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
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

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700">{t('rooms.filterByType')}:</span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setRoomTypeFilter('all')}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  roomTypeFilter === 'all'
                    ? 'bg-teal-700 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {t('rooms.all')}
              </button>
              <button
                type="button"
                onClick={() => setRoomTypeFilter('Room')}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  roomTypeFilter === 'Room'
                    ? 'bg-teal-700 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {t('rooms.rooms')}
              </button>
              <button
                type="button"
                onClick={() => setRoomTypeFilter('Suite')}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  roomTypeFilter === 'Suite'
                    ? 'bg-teal-700 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {t('rooms.suites')}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700">{t('rooms.sortByPrice')}:</span>
            <select
              value={priceSort}
              onChange={(e) => setPriceSort(e.target.value as typeof priceSort)}
              aria-label={t('rooms.sortByPrice')}
              className="px-3 py-1.5 text-sm rounded-md border border-slate-300 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="default">{t('rooms.default')}</option>
              <option value="low-to-high">{t('rooms.lowToHigh')}</option>
              <option value="high-to-low">{t('rooms.highToLow')}</option>
            </select>
          </div>
        </div>

        <motion.div
          key={`${roomTypeFilter}-${priceSort}-${currentPage}`}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {currentRooms.map((room) => (
            <motion.div
              key={room.id}
              className="group relative overflow-hidden rounded-md bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="relative h-64 sm:h-72 group overflow-hidden rounded-md">
                <img
                  src={room.imageUrl}
                  alt={room.name}
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
                {roomStats[normalizeName(room.name)] &&
                roomStats[normalizeName(room.name)].count > 0 ? (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <StarIcon className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm font-medium text-slate-900">
                        {roomStats[normalizeName(room.name)].avg.toFixed(1)}
                      </span>
                      <span className="text-xs text-slate-600">
                        ({roomStats[normalizeName(room.name)].count})
                      </span>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-teal-700 mb-1">{room.name}</h3>
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

                <p className="text-slate-600 mb-4 text-lg/6 leading-relaxed">{room.description}</p>

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

                <div className="flex space-x-3">
                  <motion.button
                    type="button"
                    className="flex-1 bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => handleBookNowClick(room.name)}
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

        <RoomsSuitesPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalPosts={filteredAndSortedRooms.length}
          postsPerPage={postsPerPage}
        />
        <ViewDetails open={detailsOpen} onClose={closeDetails} room={detailsRoom} />
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

      {bookFormOpen && (
        <BookNowForm
          isOpen={bookFormOpen}
          onClose={() => setBookFormOpen(false)}
          defaultRoomType={selectedRoom}
        />
      )}
    </div>
  )
}
