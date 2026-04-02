import { useRef } from 'react'

export function useTabs() {
  const mobileScrollRef = useRef<HTMLElement>(null)
  const tabletScrollRef = useRef<HTMLElement>(null)

  const scrollByStep = (el: HTMLElement | null, direction: 'left' | 'right') => {
    if (!el) return
    const step = Math.max(120, Math.floor(el.clientWidth * 0.6))
    const delta = direction === 'left' ? -step : step
    if (typeof el.scrollBy === 'function') {
      el.scrollBy({ left: delta, behavior: 'smooth' })
    } else {
      el.scrollLeft += delta
    }
  }

  const scrollLeftMobile = () => scrollByStep(mobileScrollRef.current, 'left')
  const scrollRightMobile = () => scrollByStep(mobileScrollRef.current, 'right')
  const scrollLeftTablet = () => scrollByStep(tabletScrollRef.current, 'left')
  const scrollRightTablet = () => scrollByStep(tabletScrollRef.current, 'right')

  return {
    mobileScrollRef,
    tabletScrollRef,
    scrollLeftMobile,
    scrollRightMobile,
    scrollLeftTablet,
    scrollRightTablet,
  }
}
