import { useState } from 'react'

export function useMobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [bookFormOpen, setBookFormOpen] = useState(false)

  return {
    mobileMenuOpen,
    setMobileMenuOpen,
    bookFormOpen,
    setBookFormOpen,
  }
}
