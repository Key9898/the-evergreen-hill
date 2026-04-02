import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import BookForm from './BookForm'

interface IconProps {
  className?: string
  'aria-hidden'?: boolean
}

interface FooterProps {
  onNavigate?: (page: string) => void
}

type NavItem = { name: string; page: string } | { name: string; action: string }

const navigation = {
  solutions: [
    { name: 'Rooms & Suites', page: 'roomsAndSuites' },
    { name: 'Experiences', page: 'experiences' },
    { name: 'Gallery', page: 'gallery' },
    { name: 'Location', page: 'location' },
  ],
  support: [
    { name: 'Contact Us', page: 'contact' },
    { name: 'Reservations', action: 'booking' },
    { name: 'FAQs', page: 'faqs' },
  ],
  TheEvergreenHill: [
    { name: 'Our Story', page: 'ourStory' },
    { name: 'Our Team', page: 'team' },
    { name: 'Events', page: 'events' },
    { name: 'Guest Reviews', page: 'guestReviews' },
  ],
  Policies: [
    { name: 'Terms of service', page: 'termsOfService' },
    { name: 'Privacy policy', page: 'privacyPolicy' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: IconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props: IconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Telegram',
      href: '#',
      icon: (props: IconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
    {
      name: 'Line',
      href: '#',
      icon: (props: IconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
        </svg>
      ),
    },
  ],
}

export default function Footer({ onNavigate }: FooterProps) {
  const [bookFormOpen, setBookFormOpen] = useState(false)
  const { fadeInUp, staggerContainer } = useAnimation()

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

  const handleItemClick = (item: NavItem) => {
    if ('action' in item && item.action === 'booking') {
      setBookFormOpen(true)
    } else if ('page' in item && item.page) {
      handleNavigation(item.page)
    }
  }

  return (
    <>
      <footer className="bg-slate-600/90">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
          <motion.div
            className="xl:grid xl:grid-cols-3 xl:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.div className="space-y-6" variants={fadeInUp}>
              <button
                type="button"
                onClick={handleLogoClick}
                className="bg-transparent border-none cursor-pointer p-0 overflow-visible hover:bg-teal-950/50 rounded-md transition-colors"
              >
                <div className="w-21 h-21 rounded-full overflow-visible">
                  <img
                    alt="The Evergreen Hill Logo"
                    src="/Logo/logo.svg"
                    className="size-full object-contain transition-transform duration-200 hover:scale-105 origin-center"
                  />
                </div>
              </button>
              <p className="text-base text-balance text-slate-300">
                Experience timeless elegance and evergreen serenity at The Evergreen Hill, Kalaw.
              </p>
              <div className="flex gap-x-6">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-slate-300 hover:text-slate-200"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon aria-hidden={true} className="size-6" />
                  </a>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0"
              variants={fadeInUp}
            >
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base/6 font-semibold text-white">Explore</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <motion.button
                          type="button"
                          onClick={() => handleNavigation(item.page)}
                          whileHover={{ opacity: 0.8 }}
                          className="text-base/6 text-slate-300 hover:text-slate-200 bg-transparent border-none cursor-pointer p-0"
                        >
                          {item.name}
                        </motion.button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-base/6 font-semibold text-white">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <motion.button
                          type="button"
                          onClick={() => handleItemClick(item)}
                          whileHover={{ opacity: 0.8 }}
                          className="text-base/6 text-slate-300 hover:text-slate-200 bg-transparent border-none cursor-pointer p-0"
                        >
                          {item.name}
                        </motion.button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base/6 font-semibold text-white">The Evergreen Hill</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.TheEvergreenHill.map((item) => (
                      <li key={item.name}>
                        <motion.button
                          type="button"
                          onClick={() => handleNavigation(item.page)}
                          whileHover={{ opacity: 0.8 }}
                          className="text-base/6 text-slate-300 hover:text-slate-200 bg-transparent border-none cursor-pointer p-0"
                        >
                          {item.name}
                        </motion.button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-base/6 font-semibold text-white">Policies</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.Policies.map((item) => (
                      <li key={item.name}>
                        <motion.button
                          type="button"
                          onClick={() => handleNavigation(item.page)}
                          whileHover={{ opacity: 0.8 }}
                          className="text-base/6 text-slate-300 hover:text-slate-200 bg-transparent border-none cursor-pointer p-0"
                        >
                          {item.name}
                        </motion.button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <div className="mt-6 -mb-6 border-t border-slate-400/10 pt-2 sm:mt-6">
            <p className="text-sm/6 text-center text-slate-400">
              &copy; 2025 The Evergreen Hill, Kalaw. All rights reserved. <br /> Designed and
              Developed by Wunna Aung.
            </p>
          </div>
        </div>
      </footer>

      {/* Book Form Modal */}
      {bookFormOpen && <BookForm isOpen={bookFormOpen} onClose={() => setBookFormOpen(false)} />}
    </>
  )
}
