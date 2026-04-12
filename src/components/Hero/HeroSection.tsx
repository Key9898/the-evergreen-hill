import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
const HeroImage = '/Hero/hero_img.jpg'
import { BookForm } from '../Layout'
import LanguageSwitcher from '../Layout/LanguageSwitcher/LanguageSwitcher'
import AuthButtons from '../Layout/AuthButtons'
import LoginModal from '../Auth/LoginModal'
import RegisterModal from '../Auth/RegisterModal'
import ForgotPasswordModal from '../Auth/ForgotPasswordModal'
import { useHeader } from '../../hooks/useHeader'

const leftNavigation = [
  { name: 'Rooms & Suites', key: 'roomsAndSuites' },
  { name: 'Experiences', key: 'experiences' },
  { name: 'Gallery', key: 'gallery' },
]

const rightNavigation = [
  { name: 'Our Story', key: 'ourStory' },
  { name: 'Location', key: 'location' },
  { name: 'Contact', key: 'contact' },
]

interface HeroSectionProps {
  onNavigate?: (page: string) => void
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const [bookFormOpen, setBookFormOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useTranslation()
  const { fadeInUp, fadeInDown, staggerContainer } = useAnimation()
  const { authModal, openAuthModal, closeAuthModal } = useHeader(onNavigate)

  const handleNavigation = (key: string) => {
    onNavigate?.(key)
  }

  const handleLogoClick = () => {
    onNavigate?.('home')
  }

  return (
    <motion.div
      className=""
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-50px' }}
    >
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="mx-auto grid grid-cols-3 items-center max-w-7xl p-6 lg:px-8 overflow-visible"
        >
          {/* Left Section: LanguageSwitcher / Desktop Nav */}
          <div className="flex items-center justify-start">
            <LanguageSwitcher />

            <div className="hidden lg:flex lg:gap-x-8 ml-8">
              {leftNavigation.map((item) => (
                <motion.button
                  type="button"
                  key={item.key}
                  onClick={() => handleNavigation(item.key)}
                  className="text-sm font-semibold text-white hover:text-teal-600 transition-colors duration-200 bg-transparent border-none cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
              className="m-0 p-0 overflow-visible bg-transparent border-none cursor-pointer hover:bg-teal-700/10 rounded-md transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">The Evergreen Hill</span>
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-16 lg:h-16 rounded-full overflow-visible">
                <img
                  alt="The Evergreen Hill Logo"
                  src="/Logo/logo.svg"
                  className="size-full object-contain origin-center"
                />
              </div>
            </motion.button>
          </div>

          {/* Right Section: Hamburger / Desktop Right Nav */}
          <div className="flex justify-end items-center">
            <div className="hidden lg:flex lg:gap-x-8 mr-8">
              {rightNavigation.map((item) => (
                <motion.button
                  type="button"
                  key={item.key}
                  onClick={() => handleNavigation(item.key)}
                  className="text-sm font-semibold text-white hover:text-teal-600 transition-colors duration-200 bg-transparent border-none cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            <div className="hidden lg:flex items-center mr-8">
              <AuthButtons
                onOpenLogin={() => openAuthModal('login')}
                onNavigate={handleNavigation}
              />
            </div>

            <div className="flex lg:hidden">
              <motion.button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </motion.button>
            </div>
          </div>
        </nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-b from-teal-900 via-emerald-900 to-teal-800 text-teal-50 p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10 shadow-xl">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleLogoClick}
                className="-m-1.5 p-1.5 bg-transparent border-none cursor-pointer hover:bg-white/10 rounded-md transition-colors"
              >
                <span className="sr-only">The Evergreen Hill</span>
                <img
                  alt="The Evergreen Hill Logo"
                  src="/Logo/logo.svg"
                  className="h-16 w-auto sm:h-20"
                />
              </button>
              <motion.button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-teal-100 hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </motion.button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {[...leftNavigation, ...rightNavigation].map((item) => (
                    <motion.button
                      type="button"
                      key={item.key}
                      onClick={() => {
                        handleNavigation(item.key)
                        setMobileMenuOpen(false)
                      }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-teal-50 hover:bg-white/10 w-full text-left bg-transparent border-none cursor-pointer transition-colors"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>

                <div className="py-6">
                  <AuthButtons
                    onOpenLogin={() => {
                      setMobileMenuOpen(false)
                      openAuthModal('login')
                    }}
                    onNavigate={(page) => {
                      setMobileMenuOpen(false)
                      handleNavigation(page)
                    }}
                  />
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div
        className={`h-screen w-full overflow-hidden ${bookFormOpen ? 'blur-sm' : ''} transition-all duration-300`}
      >
        <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
          <img
            alt="Hero Background"
            src={HeroImage}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 -z-10 w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 -z-5 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-1/3 transform-gpu overflow-hidden blur-2xl"
          >
            <div className="relative left-1/2 top-0 aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 lg:w-[72rem] [clip-path:polygon(74.1%_44.1%,100%_61.6%,97.5%_26.9%,85.5%_0.1%,80.7%_2%,72.5%_32.5%,60.2%_62.4%,52.4%_68.1%,47.5%_58.3%,45.2%_34.5%,27.5%_76.7%,0.1%_64.9%,17.9%_100%,27.6%_76.8%,76.1%_97.7%,74.1%_44.1%)]" />
          </div>

          <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-5xl text-center"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div className="mb-4 sm:mb-6 flex justify-center" variants={fadeInDown}>
                <div className="relative rounded-md px-4 py-2 text-xs text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 transition-all duration-300 sm:text-sm md:text-base backdrop-blur-md shadow-lg hover:shadow-xl">
                  {t('hero.welcome')}
                </div>
              </motion.div>

              <div className="space-y-4 sm:space-y-6">
                <motion.h1
                  className="text-3xl font-bold tracking-tight text-balance text-white leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                  variants={fadeInDown}
                >
                  {t('hero.title1')}
                  <br className="hidden sm:inline" />
                  <span className="sm:hidden"> </span>
                  {t('hero.title2')}
                </motion.h1>

                <motion.p
                  className="mx-auto max-w-2xl text-base font-medium text-pretty text-slate-100 leading-relaxed sm:text-lg md:text-xl lg:max-w-3xl"
                  variants={fadeInUp}
                >
                  {t('hero.description')}
                </motion.p>

                <motion.div
                  className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row sm:gap-6"
                  variants={fadeInUp}
                >
                  <motion.button
                    type="button"
                    onClick={() => setBookFormOpen(true)}
                    className="w-full max-w-xs rounded-md bg-teal-800 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-all duration-200 sm:w-auto md:px-8 md:py-3.5 md:text-base hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('hero.bookYourStay')}
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => onNavigate?.('gallery')}
                    className="text-sm font-semibold text-white hover:text-teal-800 transition-all duration-200 bg-transparent border-none cursor-pointer sm:text-base md:text-lg"
                    whileHover={{ scale: 1.05, x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('hero.viewGallery')}
                    <span aria-hidden="true" className="ml-1">
                      →
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 -z-10 h-1/3 transform-gpu overflow-hidden blur-2xl"
          >
            <div className="relative left-1/2 bottom-0 aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 lg:w-[72rem] [clip-path:polygon(74.1%_44.1%,100%_61.6%,97.5%_26.9%,85.5%_0.1%,80.7%_2%,72.5%_32.5%,60.2%_62.4%,52.4%_68.1%,47.5%_58.3%,45.2%_34.5%,27.5%_76.7%,0.1%_64.9%,17.9%_100%,27.6%_76.8%,76.1%_97.7%,74.1%_44.1%)]" />
          </div>
        </div>
      </div>

      {bookFormOpen && <BookForm isOpen={bookFormOpen} onClose={() => setBookFormOpen(false)} />}
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
    </motion.div>
  )
}
