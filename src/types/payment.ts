export type PaymentStatus = 'idle' | 'processing' | 'succeeded' | 'failed' | 'cancelled'

export type PaymentMethod = 'mmqr' | 'kbz_pay' | 'wave_money' | 'aya_pay' | 'cb_pay'

export interface PaymentFormState {
  isProcessing: boolean
  error: string | null
}

export interface PaymentResult {
  success: boolean
  referenceId?: string
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
  referenceId: string
}
