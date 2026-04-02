import { useCallback } from 'react'
import { usePaymentContext } from '../context/PaymentContext'
import type { BookingSummaryData } from '../types/payment'

interface UseBookingSummaryReturn {
  summary: BookingSummaryData | null
  setSummary: (data: BookingSummaryData | null) => void
  proceedToPayment: () => void
  hasSummary: boolean
}

export function useBookingSummary(onProceed?: () => void): UseBookingSummaryReturn {
  const { bookingSummary, setBookingSummary } = usePaymentContext()

  const proceedToPayment = useCallback(() => {
    if (onProceed) {
      onProceed()
    }
  }, [onProceed])

  return {
    summary: bookingSummary,
    setSummary: setBookingSummary,
    proceedToPayment,
    hasSummary: bookingSummary !== null,
  }
}
