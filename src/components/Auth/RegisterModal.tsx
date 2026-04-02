import { motion, AnimatePresence } from 'framer-motion'
import {
  XMarkIcon,
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
  PhoneIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline'
import { useAnimation } from '../../hooks/useAnimation'
import { useRegisterForm } from '../../hooks/useRegisterForm'

interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
  onNavigateLogin: () => void
  onSuccess?: () => void
}

export default function RegisterModal({
  isOpen,
  onClose,
  onNavigateLogin,
  onSuccess,
}: RegisterModalProps) {
  const { overlayTransition, modalTransition } = useAnimation()
  const { formState, handleChange, handleSubmit, passwordsMatch } = useRegisterForm(onSuccess)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="overlay"
            variants={overlayTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />
          <motion.div
            key="modal"
            variants={modalTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden my-4">
              <div className="bg-gradient-to-r from-teal-700 to-emerald-700 px-6 py-5 flex items-center justify-between">
                <h2 className="text-white font-serif text-xl font-semibold">Create Account</h2>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <XMarkIcon className="size-6" />
                </button>
              </div>

              <div className="p-6">
                <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-700">
                    Firebase Auth not configured yet. UI preview only.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="reg-first-name"
                        className="block text-sm font-medium text-slate-700 mb-1"
                      >
                        First Name
                      </label>
                      <div className="relative">
                        <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                        <input
                          id="reg-first-name"
                          type="text"
                          required
                          value={formState.firstName}
                          onChange={(e) => handleChange('firstName', e.target.value)}
                          placeholder="John"
                          className="w-full pl-9 pr-3 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="reg-last-name"
                        className="block text-sm font-medium text-slate-700 mb-1"
                      >
                        Last Name
                      </label>
                      <input
                        id="reg-last-name"
                        type="text"
                        required
                        value={formState.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        placeholder="Doe"
                        className="w-full px-3 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="reg-email"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                      <input
                        id="reg-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="reg-phone"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                      <input
                        id="reg-phone"
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="+95 9 123 456 789"
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="reg-password"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <LockClosedIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                      <input
                        id="reg-password"
                        type="password"
                        required
                        value={formState.password}
                        onChange={(e) => handleChange('password', e.target.value)}
                        placeholder="Min. 8 characters"
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="reg-confirm-password"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <LockClosedIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                      <input
                        id="reg-confirm-password"
                        type="password"
                        required
                        value={formState.confirmPassword}
                        onChange={(e) => handleChange('confirmPassword', e.target.value)}
                        placeholder="••••••••"
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                          !passwordsMatch ? 'border-red-400' : 'border-slate-300'
                        }`}
                      />
                    </div>
                    {!passwordsMatch && (
                      <p className="text-xs text-red-600 mt-1">Passwords do not match</p>
                    )}
                  </div>

                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formState.agreeTerms}
                      onChange={(e) => handleChange('agreeTerms', e.target.checked)}
                      className="rounded border-slate-300 text-teal-600 focus:ring-teal-500 mt-0.5"
                    />
                    <span className="text-sm text-slate-600">
                      I agree to the{' '}
                      <span className="text-teal-600 font-medium">Terms of Service</span> and{' '}
                      <span className="text-teal-600 font-medium">Privacy Policy</span>
                    </span>
                  </label>

                  {formState.error && (
                    <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      <ExclamationCircleIcon className="size-5 text-red-500 shrink-0" />
                      <p className="text-sm text-red-700">{formState.error}</p>
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={formState.isSubmitting || !passwordsMatch}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-teal-700 text-white rounded-lg font-medium hover:bg-teal-800 transition-colors disabled:opacity-50"
                  >
                    {formState.isSubmitting ? 'Creating account...' : 'Create Account'}
                  </motion.button>
                </form>

                <p className="text-center text-sm text-slate-500 mt-4">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={onNavigateLogin}
                    className="text-teal-600 hover:text-teal-700 font-medium"
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
