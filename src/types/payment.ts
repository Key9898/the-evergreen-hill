export type PaymentStatus = 'idle' | 'processing' | 'succeeded' | 'failed' | 'cancelled'

export type PaymentMethod = 'card' | 'kbz_pay' | 'wave_money'

export interface PaymentIntent {
  id: string
  clientSecret: string
  amount: number
  currency: string
  status: PaymentStatus
}

export interface PaymentFormState {
  cardholderName: string
  isProcessing: boolean
  error: string | null
}

export interface PaymentResult {
  success: boolean
  paymentIntentId?: string
  error?: string
}

export interface BookingSummaryData {
  bookingId: string
  roomName: string
  roomType: string
  checkIn: string
  checkOut: string
  nights: number
  adults: number
  children: number
  pricePerNight: number
  totalPrice: number
  currency: string
  guestName: string
  guestEmail: string
}

export interface BookingConfirmationData {
  bookingId: string
  confirmationNumber: string
  roomName: string
  checkIn: string
  checkOut: string
  guestName: string
  guestEmail: string
  totalPaid: number
  currency: string
  paymentIntentId: string
}
