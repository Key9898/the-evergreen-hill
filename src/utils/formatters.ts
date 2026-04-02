export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount)
}

export function formatNights(nights: number): string {
  return nights === 1 ? '1 night' : `${nights} nights`
}

export function formatGuests(adults: number, children: number): string {
  const parts: string[] = []
  if (adults > 0) parts.push(adults === 1 ? '1 adult' : `${adults} adults`)
  if (children > 0) parts.push(children === 1 ? '1 child' : `${children} children`)
  return parts.join(', ')
}

export function calculateNights(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 0
  const diff = new Date(checkOut).getTime() - new Date(checkIn).getTime()
  return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)))
}
