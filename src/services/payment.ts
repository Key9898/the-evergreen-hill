import type { PaymentResult } from '../types/payment'

export async function confirmMmqrPayment(referenceId: string): Promise<PaymentResult> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return { success: true, referenceId }
}
