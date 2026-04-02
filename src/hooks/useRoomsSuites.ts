import { useState, useEffect } from 'react'

const ROOMS_PER_TYPE = 5

type Booking = {
  roomName: string
  checkIn: string
  checkOut: string
  adults?: number
  children?: number
  rooms: number
}

type RoomItem = {
  id: number
  name: string
  [key: string]: unknown
}

function datesOverlap(aStart: string, aEnd: string, bStart: string, bEnd: string) {
  return new Date(aStart) < new Date(bEnd) && new Date(bStart) < new Date(aEnd)
}

export function useRoomsSuites(rooms: RoomItem[]) {
  const postsPerPage = 4
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(rooms.length / postsPerPage)
  const indexOfLast = currentPage * postsPerPage
  const indexOfFirst = indexOfLast - postsPerPage
  const currentRooms = rooms.slice(indexOfFirst, indexOfLast)

  const [bookFormOpen, setBookFormOpen] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState('')
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [detailsRoom, setDetailsRoom] = useState<RoomItem | null>(null)

  const [searchCriteria, setSearchCriteria] = useState<{
    checkIn: string
    checkOut: string
  } | null>(null)
  const [bookings, setBookings] = useState<Booking[]>([])
  const [availability, setAvailability] = useState<Record<string, number>>({})
  const [roomStats, setRoomStats] = useState<Record<string, { avg: number; count: number }>>({})

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

  useEffect(() => {
    if (!searchCriteria) {
      setAvailability({})
      return
    }
    const map: Record<string, number> = {}
    rooms.forEach((r) => {
      const count = bookings.reduce((acc, b) => {
        if (
          b.roomName === r.name &&
          datesOverlap(searchCriteria.checkIn, searchCriteria.checkOut, b.checkIn, b.checkOut)
        ) {
          return acc + (typeof b.rooms === 'number' ? b.rooms : 1)
        }
        return acc
      }, 0)
      map[r.name] = Math.max(ROOMS_PER_TYPE - count, 0)
    })
    setAvailability(map)
  }, [searchCriteria, bookings, rooms])

  useEffect(() => {
    try {
      const raw = localStorage.getItem('eh_featured_reviews')
      const list: Array<{ rating?: number; roomType?: string }> = raw ? JSON.parse(raw) : []
      const sumMap = new Map<string, { sum: number; count: number }>()
      for (const r of list) {
        if (!r?.roomType || typeof r.rating !== 'number') continue
        const key = r.roomType.toLowerCase().trim()
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
