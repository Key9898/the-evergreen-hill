import { motion, AnimatePresence } from 'framer-motion'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

interface FloatingBookButtonProps {
  onClick: () => void
}

export default function FloatingBookButton({ onClick }: FloatingBookButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, x: -50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.5, x: -50 }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
          className="fixed bottom-6 lg:bottom-8 left-6 lg:left-8 z-40 group flex items-center bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-md shadow-2xl border border-white/20 focus:outline-none
            p-3
            md:gap-2 md:px-5 md:py-3
            lg:gap-3 lg:px-6 lg:py-4"
        >
          <div
            className="bg-white/20 rounded-md transition-transform duration-300
            p-1.5 group-hover:rotate-12
            md:p-1.5
            lg:p-2"
          >
            <CalendarDaysIcon className="text-white size-5 lg:size-6" />
          </div>
          <span className="font-bold tracking-wide uppercase hidden md:inline text-xs lg:text-sm">
            Book Now
          </span>

          {/* Pulse — desktop only */}
          <div className="absolute inset-0 -z-10 rounded-md bg-teal-500/30 animate-ping hidden lg:block" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
