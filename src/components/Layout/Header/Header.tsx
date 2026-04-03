import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import { useHeader } from '../../../hooks/useHeader'
import BookForm from '../BookForm'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import AuthButtons from '../AuthButtons'
import LoginModal from '../../Auth/LoginModal'
import RegisterModal from '../../Auth/RegisterModal'
import ForgotPasswordModal from '../../Auth/ForgotPasswordModal'

const leftNavigation = [
  { name: 'Rooms & Suites', page: 'roomsAndSuites' },
  { name: 'Experiences', page: 'experiences' },
  { name: 'Gallery', page: 'gallery' },
]

const rightNavigation = [
  { name: 'Our Story', page: 'ourStory' },
  { name: 'Location', page: 'location' },
  { name: 'Contact', page: 'contact' },
]

interface HeaderProps {
  onNavigate?: (page: string) => void
  activePage?: string
}

export default function Header({ onNavigate, activePage }: HeaderProps) {
  const {
    mobileMenuOpen,
    bookFormOpen,
    authModal,
    handleNavigation,
    handleLogoClick,
    toggleMobileMenu,
    toggleBookForm,
    openAuthModal,
    closeAuthModal,
  } = useHeader(onNavigate)

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="sticky top-0 z-50 pt-5"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-visible">
          <nav
            aria-label="Global"
            className="grid grid-cols-3 items-center p-2 lg:p-4 bg-teal-950/80 backdrop-blur-md shadow-2xl rounded-xl border border-white/10 overflow-visible"
          >
            {/* Left Section: LanguageSwitcher */}
            <div className="flex justify-start items-center">
              <LanguageSwitcher />
              
              {/* Desktop Left Nav - only visible on LG */}
              <div className="hidden lg:flex lg:gap-x-8 lg:items-center ml-8">
                {leftNavigation.map((item) => (
                  <motion.button
                    type="button"
                    key={item.page}
                    onClick={() => handleNavigation(item.page)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-current={activePage === item.page ? 'page' : undefined}
                    className={`text-sm/6 font-semibold bg-transparent border-none cursor-pointer ${
                      activePage === item.page
                        ? 'text-emerald-400'
                        : 'text-white hover:text-emerald-300'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Center Section: Logo */}
            <div className="flex justify-center">
              <motion.button
                type="button"
                onClick={handleLogoClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 p-1 bg-transparent border-none cursor-pointer rounded-xl"
              >
                <span className="sr-only">The Evergreen Hill</span>
                <img
                  alt="The Evergreen Hill Logo"
                  src="/Logo/logo.svg"
                  className="object-contain h-20 w-auto sm:h-24 lg:h-16"
                />
              </motion.button>
            </div>

            {/* Right Section: Hamburger / Desktop Right Nav */}
            <div className="flex justify-end items-center">
              {/* Desktop Right items */}
              <div className="hidden lg:flex lg:gap-x-8 lg:items-center mr-8">
                {rightNavigation.map((item) => (
                  <motion.button
                    type="button"
                    key={item.page}
                    onClick={() => handleNavigation(item.page)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-current={activePage === item.page ? 'page' : undefined}
                    className={`text-sm/6 font-semibold bg-transparent border-none cursor-pointer ${
                      activePage === item.page
                        ? 'text-emerald-400'
                        : 'text-white hover:text-emerald-300'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>

              {/* Desktop Auth */}
              <div className="hidden lg:flex items-center">
                <AuthButtons
                  onOpenLogin={() => openAuthModal('login')}
                  onNavigate={handleNavigation}
                />
              </div>

              {/* Mobile/Tablet Hamburger Menu */}
              <div className="flex lg:hidden">
                <motion.button
                  type="button"
                  onClick={() => toggleMobileMenu(true)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="size-7" />
                </motion.button>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile/Tablet Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <Dialog
              static
              open={mobileMenuOpen}
              onClose={() => toggleMobileMenu(false)}
              className="relative z-[60] lg:hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-teal-950/40 backdrop-blur-sm"
              />

              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <DialogPanel className="pointer-events-auto w-screen max-w-sm">
                      <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="flex h-full flex-col overflow-y-scroll bg-gradient-to-b from-teal-900 via-emerald-950 to-teal-900 shadow-2xl"
                      >
                        <div className="px-6 py-6 border-b border-white/5">
                          <div className="flex items-center justify-between">
                            <motion.button
                              type="button"
                              onClick={handleLogoClick}
                              whileTap={{ scale: 0.95 }}
                              className="p-1"
                            >
                              <span className="sr-only">The Evergreen Hill</span>
                              <img
                                alt="The Evergreen Hill Logo"
                                src="/Logo/logo.svg"
                                className="h-20 w-auto"
                              />
                            </motion.button>
                            <motion.button
                              type="button"
                              onClick={() => toggleMobileMenu(false)}
                              whileHover={{ rotate: 90 }}
                              whileTap={{ scale: 0.8 }}
                              className="rounded-lg p-2 text-teal-100 hover:bg-white/10"
                            >
                              <span className="sr-only">Close menu</span>
                              <XMarkIcon aria-hidden="true" className="size-7" />
                            </motion.button>
                          </div>
                        </div>

                        <div className="flex-1 px-6 py-8">
                          <div className="space-y-4">
                            <div className="space-y-1">
                              {[...leftNavigation, ...rightNavigation].map((item) => (
                                <motion.button
                                  type="button"
                                  key={item.page}
                                  whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }}
                                  onClick={() => {
                                    toggleMobileMenu(false)
                                    handleNavigation(item.page)
                                  }}
                                  aria-current={activePage === item.page ? 'page' : undefined}
                                  className={`block w-full text-left px-4 py-3 text-lg font-medium rounded-xl ${
                                    activePage === item.page
                                      ? 'bg-emerald-500/10 text-emerald-300'
                                      : 'text-teal-50 hover:text-white'
                                  }`}
                                >
                                  {item.name}
                                </motion.button>
                              ))}
                            </div>

                            {/* Mobile Auth Section */}
                            <div className="pt-6 mt-6 border-t border-white/10 px-4">
                              <AuthButtons
                                onOpenLogin={() => {
                                  toggleMobileMenu(false)
                                  openAuthModal('login')
                                }}
                                onNavigate={(page) => {
                                  toggleMobileMenu(false)
                                  handleNavigation(page)
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </DialogPanel>
                  </div>
                </div>
              </div>
            </Dialog>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Book Form Modal */}
      <AnimatePresence>
        {bookFormOpen && <BookForm isOpen={bookFormOpen} onClose={() => toggleBookForm(false)} />}
      </AnimatePresence>

      <LoginModal
        isOpen={authModal === 'login'}
        onClose={closeAuthModal}
        onNavigateRegister={() => openAuthModal('register')}
        onNavigateForgotPassword={() => openAuthModal('forgot')}
        onSuccess={closeAuthModal}
      />
      <RegisterModal
        isOpen={authModal === 'register'}
        onClose={closeAuthModal}
        onNavigateLogin={() => openAuthModal('login')}
        onSuccess={closeAuthModal}
      />
      <ForgotPasswordModal
        isOpen={authModal === 'forgot'}
        onClose={closeAuthModal}
        onNavigateLogin={() => openAuthModal('login')}
      />
    </>
  )
}
