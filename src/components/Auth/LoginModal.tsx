import { motion, AnimatePresence } from 'framer-motion'
import {
  XMarkIcon,
  EnvelopeIcon,
  LockClosedIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline'
import { FcGoogle } from 'react-icons/fc'
import { useAnimation } from '../../hooks/useAnimation'
import { useLoginForm } from '../../hooks/useLoginForm'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onNavigateRegister: () => void
  onNavigateForgotPassword: () => void
  onSuccess?: () => void
}

export default function LoginModal({
  isOpen,
  onClose,
  onNavigateRegister,
  onNavigateForgotPassword,
  onSuccess,
}: LoginModalProps) {
  const { overlayTransition, modalTransition } = useAnimation()
  const {
    formState,
    handleEmailChange,
    handlePasswordChange,
    handleRememberMeChange,
    handleSubmit,
  } = useLoginForm(onSuccess)

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
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-teal-700 to-emerald-700 px-6 py-5 flex items-center justify-between">
                <h2 className="text-white font-serif text-xl font-semibold">Welcome Back</h2>
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
                  <div>
                    <label
                      htmlFor="login-email"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                      <input
                        id="login-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => handleEmailChange(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="login-password"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <LockClosedIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                      <input
                        id="login-password"
                        type="password"
                        required
                        value={formState.password}
                        onChange={(e) => handlePasswordChange(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formState.rememberMe}
                        onChange={(e) => handleRememberMeChange(e.target.checked)}
                        className="rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                      />
                      <span className="text-sm text-slate-600">Remember me</span>
                    </label>
                    <button
                      type="button"
                      onClick={onNavigateForgotPassword}
                      className="text-sm text-teal-600 hover:text-teal-700 font-medium"
                    >
                      Forgot password?
                    </button>
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
                    {formState.isSubmitting ? 'Signing in...' : 'Sign In'}
                  </motion.button>
                </form>

                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-slate-400">or continue with</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full py-3 border border-slate-300 rounded-lg font-medium text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                >
                  <FcGoogle className="size-5" />
                  Google
                </button>

                <p className="text-center text-sm text-slate-500 mt-4">
                  Don&apos;t have an account?{' '}
                  <button
                    type="button"
                    onClick={onNavigateRegister}
                    className="text-teal-600 hover:text-teal-700 font-medium"
                  >
                    Sign up
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
