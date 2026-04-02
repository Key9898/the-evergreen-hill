import type { PaymentIntent, PaymentResult } from '../types/payment'

export async function createPaymentIntent(
  _bookingId: string,
  _amount: number,
  _currency: string
): Promise<PaymentIntent> {
  throw new Error('Stripe not configured yet')
}

export async function confirmPayment(
  _paymentIntentId: string,
  _paymentMethodId: string
): Promise<PaymentResult> {
  throw new Error('Stripe not configured yet')
}

export async function cancelPayment(_paymentIntentId: string): Promise<void> {
  throw new Error('Stripe not configured yet')
}

export async function getPaymentIntent(_paymentIntentId: string): Promise<PaymentIntent> {
  throw new Error('Stripe not configured yet')
}
