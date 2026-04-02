export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  country?: string
  avatar?: string
  role: UserRole
  createdAt: string
}

export type UserRole = 'guest' | 'admin'

export interface GuestReview {
  id: string
  guestName: string
  country: string
  roomType: string
  rating: number
  reviewDate: string
  content: string
  avatar?: string
}
