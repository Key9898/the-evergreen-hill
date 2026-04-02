import { useCallback } from 'react'
import { usePaymentContext } from '../context/PaymentContext'
import type { BookingConfirmationData } from '../types/payment'

interface UseBookingConfirmationReturn {
  confirmation: BookingConfirmationData | null
  hasConfirmation: boolean
  handleBackToHome: () => void
  handleViewBookings: () => void
}

export function useBookingConfirmation(
  onBackToHome?: () => void,
  onViewBookings?: () => void
): UseBookingConfirmationReturn {
  const { confirmation } = usePaymentContext()

  const handleBackToHome = useCallback(() => {
    if (onBackToHome) {
      onBackToHome()
    }
  }, [onBackToHome])

  const handleViewBookings = useCallback(() => {
    if (onViewBookings) {
      onViewBookings()
    }
  }, [onViewBookings])

  return {
    confirmation,
    hasConfirmation: confirmation !== null,
    handleBackToHome,
    handleViewBookings,
  }
}
