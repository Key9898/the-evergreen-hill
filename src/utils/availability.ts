import { ROOMS_PER_TYPE } from '../constants/rooms'

export type Booking = {
  roomName: string
  checkIn: string
  checkOut: string
  adults?: number
  children?: number
  rooms: number
}

export type SearchCriteria = {
  checkIn: string
  checkOut: string
}

export function datesOverlap(aStart: string, aEnd: string, bStart: string, bEnd: string): boolean {
  return new Date(aStart) < new Date(bEnd) && new Date(bStart) < new Date(aEnd)
}

export function computeAvailability(
  roomName: string,
  searchCriteria: SearchCriteria | null,
  bookings: Booking[]
): number {
  if (!searchCriteria) return ROOMS_PER_TYPE

  const bookedCount = bookings.reduce((acc, b) => {
    if (
      b.roomName === roomName &&
      datesOverlap(searchCriteria.checkIn, searchCriteria.checkOut, b.checkIn, b.checkOut)
    ) {
      return acc + (typeof b.rooms === 'number' ? b.rooms : 1)
    }
    return acc
  }, 0)

  return Math.max(ROOMS_PER_TYPE - bookedCount, 0)
}

export function computeAllAvailability(
  roomNames: string[],
  searchCriteria: SearchCriteria | null,
  bookings: Booking[]
): Record<string, number> {
  const result: Record<string, number> = {}
  for (const name of roomNames) {
    result[name] = computeAvailability(name, searchCriteria, bookings)
  }
  return result
}

export function getSearchCriteriaFromStorage(): SearchCriteria | null {
  try {
    const raw = localStorage.getItem('eh_check_search')
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function getBookingsFromStorage(): Booking[] {
  try {
    const raw = localStorage.getItem('eh_bookings')
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function getReviewsFromStorage(): Array<{ rating?: number; roomType?: string }> {
  try {
    const raw = localStorage.getItem('eh_featured_reviews')
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function computeRoomStats(
  reviews: Array<{ rating?: number; roomType?: string }>
): Record<string, { avg: number; count: number }> {
  const sumMap = new Map<string, { sum: number; count: number }>()

  for (const r of reviews) {
    if (!r?.roomType || typeof r.rating !== 'number') continue
    const key = r.roomType.toLowerCase().trim()
    const entry = sumMap.get(key) ?? { sum: 0, count: 0 }
    entry.sum += r.rating
    entry.count += 1
    sumMap.set(key, entry)
  }

  const result: Record<string, { avg: number; count: number }> = {}
  for (const [key, { sum, count }] of sumMap.entries()) {
    result[key] = { avg: count ? sum / count : 0, count }
  }

  return result
}
