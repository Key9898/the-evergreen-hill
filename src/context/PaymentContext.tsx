import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { PaymentStatus, BookingSummaryData, BookingConfirmationData } from '../types/payment'

interface PaymentContextValue {
  status: PaymentStatus
  setStatus: (status: PaymentStatus) => void
  bookingSummary: BookingSummaryData | null
  setBookingSummary: (data: BookingSummaryData | null) => void
  confirmation: BookingConfirmationData | null
  setConfirmation: (data: BookingConfirmationData | null) => void
  reset: () => void
}

const PaymentContext = createContext<PaymentContextValue | null>(null)

interface PaymentProviderProps {
  children: ReactNode
}

export function PaymentProvider({ children }: PaymentProviderProps) {
  const [status, setStatus] = useState<PaymentStatus>('idle')
  const [bookingSummary, setBookingSummary] = useState<BookingSummaryData | null>(null)
  const [confirmation, setConfirmation] = useState<BookingConfirmationData | null>(null)

  const reset = () => {
    setStatus('idle')
    setBookingSummary(null)
    setConfirmation(null)
  }

  return (
    <PaymentContext.Provider
      value={{
        status,
        setStatus,
        bookingSummary,
        setBookingSummary,
        confirmation,
        setConfirmation,
        reset,
      }}
    >
      {children}
    </PaymentContext.Provider>
  )
}

export function usePaymentContext(): PaymentContextValue {
  const context = useContext(PaymentContext)
  if (!context) {
    throw new Error('usePaymentContext must be used within PaymentProvider')
  }
  return context
}
