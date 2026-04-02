import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useScrollToTop } from '../../hooks/useScrollToTop'

describe('useScrollToTop', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    window.scrollTo = vi.fn()
  })

  it('is not visible initially when scrollY is 0', () => {
    const { result } = renderHook(() => useScrollToTop())
    expect(result.current.isVisible).toBe(false)
  })

  it('becomes visible when scrollY exceeds threshold', () => {
    const { result } = renderHook(() => useScrollToTop(300))

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 400, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current.isVisible).toBe(true)
  })

  it('scrollToTop calls window.scrollTo', () => {
    const { result } = renderHook(() => useScrollToTop())
    act(() => result.current.scrollToTop())
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
