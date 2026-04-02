import type { RoomType } from './room'

export interface Booking {
  id: string
  roomType: RoomType
  checkIn: string
  checkOut: string
  adults: number
  children: number
  childrenAges: number[]
  leadGuest: {
    firstName: string
    lastName: string
    email: string
    phone: string
    country: string
  }
  specialRequests: string
  status: BookingStatus
  createdAt: string
  totalPrice?: number
}

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed'

export interface BookingWithUser extends Booking {
  userId: string
}

export interface BookingFormState {
  checkIn: string
  checkOut: string
  adults: number
  children: number
  childrenAges: number[]
  roomType: RoomType | ''
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  specialRequests: string
  agreeTerms: boolean
  agreePrivacy: boolean
}
