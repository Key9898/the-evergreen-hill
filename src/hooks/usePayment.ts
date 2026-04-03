import { useCallback } from 'react'
import type { PaymentStatus, PaymentFormState } from '../types/payment'
import { usePaymentContext } from '../context/PaymentContext'

interface UsePaymentReturn {
  formState: PaymentFormState
  paymentStatus: PaymentStatus
  handleSubmit: () => Promise<void>
  handleCancel: () => void
}

export function usePayment(): UsePaymentReturn {
  const { status, setStatus, bookingSummary, setConfirmation } = usePaymentContext()

  const formState: PaymentFormState = {
    isProcessing: status === 'processing',
    error: status === 'failed' ? 'Payment failed. Please try again.' : null,
  }

  const handleSubmit = useCallback(async () => {
    setStatus('processing')
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStatus('succeeded')
    setConfirmation({
      bookingId: bookingSummary?.bookingId ?? 'MOCK-001',
      confirmationNumber: `EH-${Date.now().toString().slice(-6)}`,
      roomName: bookingSummary?.roomName ?? 'Deluxe Garden View',
      checkIn: bookingSummary?.checkIn ?? new Date().toISOString(),
      checkOut: bookingSummary?.checkOut ?? new Date(Date.now() + 86400000 * 2).toISOString(),
      guestName: bookingSummary?.guestName ?? '',
      guestEmail: bookingSummary?.guestEmail ?? '',
      totalPaid: bookingSummary?.totalPrice ?? 0,
      currency: bookingSummary?.currency ?? 'USD',
      referenceId: `MMQR-${Math.random().toString(36).slice(2, 10).toUpperCase()}`,
    })
  }, [setStatus, setConfirmation, bookingSummary])

  const handleCancel = useCallback(() => {
    setStatus('cancelled')
  }, [setStatus])

  return {
    formState,
    paymentStatus: status,
    handleSubmit,
    handleCancel,
  }
}
