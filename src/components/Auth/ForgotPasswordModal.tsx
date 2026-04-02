import { motion, AnimatePresence } from 'framer-motion'
import {
  XMarkIcon,
  EnvelopeIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline'
import { useAnimation } from '../../hooks/useAnimation'
import { useForgotPassword } from '../../hooks/useForgotPassword'

interface ForgotPasswordModalProps {
  isOpen: boolean
  onClose: () => void
  onNavigateLogin: () => void
}

export default function ForgotPasswordModal({
  isOpen,
  onClose,
  onNavigateLogin,
}: ForgotPasswordModalProps) {
  const { overlayTransition, modalTransition, fadeInUp } = useAnimation()
  const { formState, handleEmailChange, handleSubmit, reset } = useForgotPassword()

  const handleClose = () => {
    reset()
    onClose()
  }

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
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />
          <motion.div
            key="modal"
            variants={modalTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-teal-700 to-emerald-700 px-6 py-5 flex items-center justify-between">
                <h2 className="text-white font-serif text-xl font-semibold">Reset Password</h2>
                <button
                  type="button"
                  onClick={handleClose}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <XMarkIcon className="size-6" />
                </button>
              </div>

              <div className="p-6">
                {formState.isSent ? (
                  <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    className="text-center py-4"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="size-16 rounded-full bg-teal-50 flex items-center justify-center">
                        <CheckCircleIcon className="size-10 text-teal-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Email Sent!</h3>
                    <p className="text-slate-500 text-sm mb-6">
                      Check your inbox at <strong>{formState.email}</strong> for a reset link.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        reset()
                        onNavigateLogin()
                      }}
                      className="w-full py-3 bg-teal-700 text-white rounded-lg font-medium hover:bg-teal-800 transition-colors"
                    >
                      Back to Sign In
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <p className="text-slate-500 text-sm mb-4">
                      Enter your email address and we&apos;ll send you a link to reset your
                      password.
                    </p>

                    <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <p className="text-sm text-amber-700">
                        Firebase Auth not configured yet. UI preview only.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label
                          htmlFor="forgot-email"
                          className="block text-sm font-medium text-slate-700 mb-1"
                        >
                          Email Address
                        </label>
                        <div className="relative">
                          <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                          <input
                            id="forgot-email"
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) => handleEmailChange(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          />
                        </div>
                      </div>

                      {formState.error && (
                        <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                          <ExclamationCircleIcon className="size-5 text-red-500 shrink-0" />
                          <p className="text-sm text-red-700">{formState.error}</p>
                        </div>
                      )}

                      <motion.button
                        type="submit"
                        disabled={formState.isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 bg-teal-700 text-white rounded-lg font-medium hover:bg-teal-800 transition-colors disabled:opacity-50"
                      >
                        {formState.isSubmitting ? 'Sending...' : 'Send Reset Link'}
                      </motion.button>
                    </form>

                    <button
                      type="button"
                      onClick={() => {
                        reset()
                        onNavigateLogin()
                      }}
                      className="w-full text-center text-sm text-teal-600 hover:text-teal-700 font-medium mt-4"
                    >
                      Back to Sign In
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
