import { motion } from 'framer-motion'
import { LockClosedIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { useAnimation } from '../../hooks/useAnimation'
import { usePayment } from '../../hooks/usePayment'

interface PaymentFormProps {
  totalAmount: number
  currency: string
  onCancel: () => void
  onSuccess?: () => void
}

export default function PaymentForm({ totalAmount, currency, onCancel }: PaymentFormProps) {
  const { fadeInUp, staggerContainer } = useAnimation()
  const { formState, handleCardholderNameChange, handleSubmit, clearError } = usePayment()

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="max-w-lg mx-auto p-6"
    >
      <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
        <LockClosedIcon className="size-5 text-teal-600" />
        <h2 className="text-2xl font-serif font-semibold text-slate-800">Secure Payment</h2>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="bg-teal-50 border border-teal-200 rounded-lg px-4 py-3 mb-6"
      >
        <p className="text-sm text-teal-700">
          Stripe integration coming soon. This form is a UI preview.
        </p>
      </motion.div>

      <motion.div variants={fadeInUp} className="space-y-4">
        <div>
          <label
            htmlFor="cardholder-name"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Cardholder Name
          </label>
          <input
            id="cardholder-name"
            type="text"
            value={formState.cardholderName}
            onChange={(e) => handleCardholderNameChange(e.target.value)}
            placeholder="Name on card"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Card Details</label>
          <div className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-slate-50 text-slate-400 text-sm">
            Stripe Elements will appear here
          </div>
        </div>

        {formState.error && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3"
          >
            <ExclamationCircleIcon className="size-5 text-red-500 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-red-700">{formState.error}</p>
            </div>
            <button
              type="button"
              onClick={clearError}
              className="text-red-400 hover:text-red-600 text-sm"
            >
              ×
            </button>
          </motion.div>
        )}
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-6 border-t border-slate-100 pt-4">
        <div className="flex justify-between text-slate-800 font-semibold text-lg mb-4">
          <span>Total to Pay</span>
          <span>
            {currency} {totalAmount.toFixed(2)}
          </span>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={formState.isProcessing}
            className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <motion.button
            type="button"
            onClick={handleSubmit}
            disabled={formState.isProcessing || !formState.cardholderName}
            whileHover={{ scale: formState.isProcessing ? 1 : 1.02 }}
            whileTap={{ scale: formState.isProcessing ? 1 : 0.98 }}
            className="flex-1 px-6 py-3 bg-teal-700 text-white rounded-lg font-medium hover:bg-teal-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <LockClosedIcon className="size-4" />
            {formState.isProcessing ? 'Processing...' : 'Pay Now'}
          </motion.button>
        </div>

        <p className="text-xs text-slate-400 text-center mt-3 flex items-center justify-center gap-1">
          <LockClosedIcon className="size-3" />
          Secured by Stripe. Your card information is encrypted.
        </p>
      </motion.div>
    </motion.div>
  )
}
