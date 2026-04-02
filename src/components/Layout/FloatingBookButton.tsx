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
      // Show button after scrolling down 300px
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
          className="fixed bottom-8 left-8 z-40 group flex items-center gap-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-4 rounded-full shadow-2xl border border-white/20 focus:outline-none"
        >
          <div className="bg-white/20 p-2 rounded-full group-hover:rotate-12 transition-transform duration-300">
            <CalendarDaysIcon className="size-6 text-white" />
          </div>
          <span className="font-bold tracking-wide uppercase text-sm">Book Now</span>

          {/* Subtle pulse effect */}
          <div className="absolute inset-0 -z-10 rounded-full bg-teal-500/30 animate-ping" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
