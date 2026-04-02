import type { Booking } from '../../types/booking'

export const mockBooking: Booking = {
  id: 'booking-001',
  roomType: 'Deluxe Room',
  checkIn: '2026-04-10',
  checkOut: '2026-04-13',
  adults: 2,
  children: 0,
  childrenAges: [],
  leadGuest: {
    firstName: 'Aung',
    lastName: 'Kyaw',
    email: 'aung@example.com',
    phone: '+959123456789',
    country: 'Myanmar',
  },
  specialRequests: '',
  status: 'confirmed',
  createdAt: '2026-03-26T10:00:00Z',
  totalPrice: 360,
}

export const mockBookings: Booking[] = [mockBooking]
