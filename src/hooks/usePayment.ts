import { useState, useCallback } from 'react'
import type { PaymentStatus, PaymentFormState } from '../types/payment'
import { usePaymentContext } from '../context/PaymentContext'

interface UsePaymentReturn {
  formState: PaymentFormState
  paymentStatus: PaymentStatus
  handleCardholderNameChange: (name: string) => void
  handleSubmit: () => Promise<void>
  handleCancel: () => void
  clearError: () => void
}

export function usePayment(): UsePaymentReturn {
  const { status, setStatus, setConfirmation } = usePaymentContext()
  const [formState, setFormState] = useState<PaymentFormState>({
    cardholderName: '',
    isProcessing: false,
    error: null,
  })

  const handleCardholderNameChange = useCallback((name: string) => {
    setFormState((prev) => ({ ...prev, cardholderName: name }))
  }, [])

  const handleSubmit = useCallback(async () => {
    setFormState((prev) => ({ ...prev, isProcessing: true, error: null }))
    setStatus('processing')
    try {
      await Promise.resolve()
      setStatus('succeeded')
      setConfirmation({
        bookingId: 'STUB-001',
        confirmationNumber: 'EH-2024-001',
        roomName: 'Deluxe Garden View',
        checkIn: new Date().toISOString(),
        checkOut: new Date(Date.now() + 86400000 * 2).toISOString(),
        guestName: formState.cardholderName,
        guestEmail: 'guest@example.com',
        totalPaid: 0,
        currency: 'USD',
        paymentIntentId: 'pi_stub',
      })
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Payment failed'
      setFormState((prev) => ({ ...prev, error: message }))
      setStatus('failed')
    } finally {
      setFormState((prev) => ({ ...prev, isProcessing: false }))
    }
  }, [formState.cardholderName, setStatus, setConfirmation])

  const handleCancel = useCallback(() => {
    setStatus('cancelled')
  }, [setStatus])

  const clearError = useCallback(() => {
    setFormState((prev) => ({ ...prev, error: null }))
  }, [])

  return {
    formState,
    paymentStatus: status,
    handleCardholderNameChange,
    handleSubmit,
    handleCancel,
    clearError,
  }
}
