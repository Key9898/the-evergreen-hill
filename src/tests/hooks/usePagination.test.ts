import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { usePagination } from '../../hooks/usePagination'

const items = Array.from({ length: 20 }, (_, i) => `item-${i + 1}`)

describe('usePagination', () => {
  it('starts on page 1', () => {
    const { result } = renderHook(() => usePagination(items, 6))
    expect(result.current.currentPage).toBe(1)
  })

  it('calculates total pages correctly', () => {
    const { result } = renderHook(() => usePagination(items, 6))
    expect(result.current.totalPages).toBe(4)
  })

  it('returns correct items for page 1', () => {
    const { result } = renderHook(() => usePagination(items, 6))
    expect(result.current.currentItems).toHaveLength(6)
    expect(result.current.currentItems[0]).toBe('item-1')
  })

  it('navigates to next page', () => {
    const { result } = renderHook(() => usePagination(items, 6))
    act(() => result.current.goToPage(2))
    expect(result.current.currentPage).toBe(2)
    expect(result.current.currentItems[0]).toBe('item-7')
  })

  it('does not go below page 1', () => {
    const { result } = renderHook(() => usePagination(items, 6))
    act(() => result.current.goToPage(0))
    expect(result.current.currentPage).toBe(1)
  })

  it('does not exceed total pages', () => {
    const { result } = renderHook(() => usePagination(items, 6))
    act(() => result.current.goToPage(99))
    expect(result.current.currentPage).toBe(1)
  })

  it('last page has fewer items if items do not divide evenly', () => {
    const { result } = renderHook(() => usePagination(items, 6))
    act(() => result.current.goToPage(4))
    expect(result.current.currentItems).toHaveLength(2)
  })
})
