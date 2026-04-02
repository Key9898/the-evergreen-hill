import { useState } from 'react'

export type AuthModalType = 'login' | 'register' | 'forgot' | null

export function useHeader(onNavigate?: (page: string) => void) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [bookFormOpen, setBookFormOpen] = useState(false)
  const [authModal, setAuthModal] = useState<AuthModalType>(null)

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page)
    }
  }

  const handleLogoClick = () => {
    if (onNavigate) {
      onNavigate('home')
    }
  }

  const toggleMobileMenu = (open: boolean) => setMobileMenuOpen(open)
  const toggleBookForm = (open: boolean) => setBookFormOpen(open)
  const openAuthModal = (type: AuthModalType) => setAuthModal(type)
  const closeAuthModal = () => setAuthModal(null)

  return {
    mobileMenuOpen,
    bookFormOpen,
    authModal,
    handleNavigation,
    handleLogoClick,
    toggleMobileMenu,
    toggleBookForm,
    openAuthModal,
    closeAuthModal,
  }
}
