import { describe, it, expect } from 'vitest'
import {
  formatDate,
  formatCurrency,
  formatNights,
  formatGuests,
  calculateNights,
} from '../utils/formatters'

describe('formatDate', () => {
  it('formats a date correctly', () => {
    const result = formatDate(new Date('2026-04-10'))
    expect(result).toContain('2026')
  })
})

describe('formatCurrency', () => {
  it('formats USD currency', () => {
    expect(formatCurrency(120)).toBe('$120.00')
  })

  it('formats with custom currency', () => {
    const result = formatCurrency(350000, 'MMK')
    expect(result).toContain('350,000')
  })
})

describe('formatNights', () => {
  it('returns singular for 1 night', () => {
    expect(formatNights(1)).toBe('1 night')
  })

  it('returns plural for multiple nights', () => {
    expect(formatNights(3)).toBe('3 nights')
  })
})

describe('formatGuests', () => {
  it('formats adults only', () => {
    expect(formatGuests(2, 0)).toBe('2 adults')
  })

  it('formats singular adult', () => {
    expect(formatGuests(1, 0)).toBe('1 adult')
  })

  it('formats adults and children', () => {
    expect(formatGuests(2, 1)).toBe('2 adults, 1 child')
  })

  it('returns empty string for zero guests', () => {
    expect(formatGuests(0, 0)).toBe('')
  })
})

describe('calculateNights', () => {
  it('calculates correct nights', () => {
    expect(calculateNights('2026-04-10', '2026-04-13')).toBe(3)
  })

  it('returns 0 for same date', () => {
    expect(calculateNights('2026-04-10', '2026-04-10')).toBe(0)
  })

  it('returns 0 for empty strings', () => {
    expect(calculateNights('', '')).toBe(0)
  })

  it('returns 0 for reversed dates', () => {
    expect(calculateNights('2026-04-13', '2026-04-10')).toBe(0)
  })
})
