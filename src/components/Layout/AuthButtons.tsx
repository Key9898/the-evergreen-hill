import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  UserCircleIcon,
  ArrowRightEndOnRectangleIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'
import { useAuth } from '../../hooks/useAuth'

interface AuthButtonsProps {
  onOpenLogin: () => void
  onNavigate: (page: string) => void
}

export default function AuthButtons({ onOpenLogin, onNavigate }: AuthButtonsProps) {
  const { user, isAuthenticated, signOut } = useAuth()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  if (!isAuthenticated) {
    return (
      <motion.button
        type="button"
        onClick={onOpenLogin}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-1.5 text-sm font-semibold text-white hover:text-teal-300 transition-colors"
      >
        <ArrowRightEndOnRectangleIcon className="size-5" />
        Sign In
      </motion.button>
    )
  }

  return (
    <div className="relative">
      <motion.button
        type="button"
        onClick={() => setDropdownOpen((prev) => !prev)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-1.5 text-sm font-semibold text-white hover:text-teal-300 transition-colors"
      >
        <UserCircleIcon className="size-5" />
        <span className="hidden xl:block max-w-24 truncate">{user?.displayName ?? 'Account'}</span>
        <ChevronDownIcon className="size-3.5" />
      </motion.button>

      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden z-50"
          >
            <button
              type="button"
              onClick={() => {
                setDropdownOpen(false)
                onNavigate('profile')
              }}
              className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
            >
              My Profile
            </button>
            <button
              type="button"
              onClick={() => {
                setDropdownOpen(false)
                onNavigate('bookingHistory')
              }}
              className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
            >
              My Bookings
            </button>
            <hr className="border-slate-100" />
            <button
              type="button"
              onClick={() => {
                setDropdownOpen(false)
                signOut()
              }}
              className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
            >
              Sign Out
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
