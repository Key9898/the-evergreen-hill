import { useState, useEffect, useMemo } from 'react'
import { ROOMS_PER_TYPE } from '../constants/rooms'
import {
  computeAvailability,
  getSearchCriteriaFromStorage,
  getBookingsFromStorage,
  getReviewsFromStorage,
  computeRoomStats,
  type Booking,
  type SearchCriteria,
} from '../utils/availability'

type RoomItem = {
  id: number
  name: string
  nameKey?: string
  [key: string]: unknown
}

export function useRoomsSuites(rooms: RoomItem[]) {
  const postsPerPage = 4
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(rooms.length / postsPerPage)
  const indexOfLast = currentPage * postsPerPage
  const indexOfFirst = indexOfLast - postsPerPage
  const currentRooms = useMemo(
    () => rooms.slice(indexOfFirst, indexOfLast),
    [rooms, indexOfFirst, indexOfLast]
  )

  const [bookFormOpen, setBookFormOpen] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState('')
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [detailsRoom, setDetailsRoom] = useState<RoomItem | null>(null)

  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria | null>(null)
  const [bookings, setBookings] = useState<Booking[]>([])
  const [availability, setAvailability] = useState<Record<string, number>>({})
  const [roomStats, setRoomStats] = useState<Record<string, { avg: number; count: number }>>({})

  useEffect(() => {
    setSearchCriteria(getSearchCriteriaFromStorage())
  }, [])

  useEffect(() => {
    setBookings(getBookingsFromStorage())
  }, [bookFormOpen])

  useEffect(() => {
    if (!searchCriteria) {
      setAvailability({})
      return
    }
    const map: Record<string, number> = {}
    rooms.forEach((r) => {
      map[r.name] = computeAvailability(r.name, searchCriteria, bookings)
    })
    setAvailability(map)
  }, [searchCriteria, bookings, rooms])

  useEffect(() => {
    const reviews = getReviewsFromStorage()
    setRoomStats(computeRoomStats(reviews))
  }, [])

  const handlePageChange = (page: number) => setCurrentPage(page)
  const handleBookNowClick = (roomName: string) => {
    setSelectedRoom(roomName)
    setBookFormOpen(true)
  }
  const openDetails = (room: RoomItem) => {
    setDetailsRoom(room)
    setDetailsOpen(true)
  }
  const closeDetails = () => {
    setDetailsOpen(false)
    setDetailsRoom(null)
  }

  return {
    currentPage,
    totalPages,
    currentRooms,
    postsPerPage,
    totalRooms: rooms.length,
    bookFormOpen,
    setBookFormOpen,
    selectedRoom,
    detailsOpen,
    detailsRoom,
    searchCriteria,
    availability,
    roomStats,
    ROOMS_PER_TYPE,
    handlePageChange,
    handleBookNowClick,
    openDetails,
    closeDetails,
    setBookings,
  }
}
