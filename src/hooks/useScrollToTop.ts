import { useEffect, useState } from 'react'

export function useScrollToTop(threshold = 300) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggle = () => setIsVisible(window.scrollY > threshold)
    window.addEventListener('scroll', toggle)
    return () => window.removeEventListener('scroll', toggle)
  }, [threshold])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return { isVisible, scrollToTop }
}
