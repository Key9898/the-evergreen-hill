import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import { usePayment } from '../../hooks/usePayment'

interface PaymentFormProps {
  totalAmount: number
  currency: string
  onCancel: () => void
  onSuccess?: () => void
}

function MmqrQrCode() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-48 h-48"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MMQR payment QR code"
    >
      <rect width="200" height="200" fill="white" />
      {/* Finder pattern — top-left */}
      <rect x="10" y="10" width="50" height="50" rx="4" fill="#1a1a1a" />
      <rect x="18" y="18" width="34" height="34" rx="2" fill="white" />
      <rect x="24" y="24" width="22" height="22" rx="1" fill="#1a1a1a" />
      {/* Finder pattern — top-right */}
      <rect x="140" y="10" width="50" height="50" rx="4" fill="#1a1a1a" />
      <rect x="148" y="18" width="34" height="34" rx="2" fill="white" />
      <rect x="154" y="24" width="22" height="22" rx="1" fill="#1a1a1a" />
      {/* Finder pattern — bottom-left */}
      <rect x="10" y="140" width="50" height="50" rx="4" fill="#1a1a1a" />
      <rect x="18" y="148" width="34" height="34" rx="2" fill="white" />
      <rect x="24" y="154" width="22" height="22" rx="1" fill="#1a1a1a" />
      {/* Data modules */}
      <rect x="72" y="10" width="8" height="8" fill="#1a1a1a" />
      <rect x="88" y="10" width="8" height="8" fill="#1a1a1a" />
      <rect x="104" y="10" width="8" height="8" fill="#1a1a1a" />
      <rect x="120" y="10" width="8" height="8" fill="#1a1a1a" />
      <rect x="72" y="26" width="8" height="8" fill="#1a1a1a" />
      <rect x="104" y="26" width="8" height="8" fill="#1a1a1a" />
      <rect x="120" y="26" width="8" height="8" fill="#1a1a1a" />
      <rect x="80" y="42" width="8" height="8" fill="#1a1a1a" />
      <rect x="96" y="42" width="8" height="8" fill="#1a1a1a" />
      <rect x="120" y="42" width="8" height="8" fill="#1a1a1a" />
      <rect x="10" y="72" width="8" height="8" fill="#1a1a1a" />
      <rect x="26" y="72" width="8" height="8" fill="#1a1a1a" />
      <rect x="50" y="72" width="8" height="8" fill="#1a1a1a" />
      <rect x="72" y="72" width="8" height="8" fill="#1a1a1a" />
      <rect x="96" y="72" width="8" height="8" fill="#1a1a1a" />
      <rect x="112" y="72" width="8" height="8" fill="#1a1a1a" />
      <rect x="136" y="72" width="8" height="8" fill="#1a1a1a" />
      <rect x="160" y="72" width="8" height="8" fill="#1a1a1a" />
      <rect x="182" y="72" width="8" height="8" fill="#1a1a1a" />
      <rect x="10" y="88" width="8" height="8" fill="#1a1a1a" />
      <rect x="42" y="88" width="8" height="8" fill="#1a1a1a" />
      <rect x="72" y="88" width="8" height="8" fill="#1a1a1a" />
      <rect x="88" y="88" width="8" height="8" fill="#1a1a1a" />
      <rect x="120" y="88" width="8" height="8" fill="#1a1a1a" />
      <rect x="144" y="88" width="8" height="8" fill="#1a1a1a" />
      <rect x="168" y="88" width="8" height="8" fill="#1a1a1a" />
      <rect x="26" y="104" width="8" height="8" fill="#1a1a1a" />
      <rect x="58" y="104" width="8" height="8" fill="#1a1a1a" />
      <rect x="80" y="104" width="8" height="8" fill="#1a1a1a" />
      <rect x="104" y="104" width="8" height="8" fill="#1a1a1a" />
      <rect x="128" y="104" width="8" height="8" fill="#1a1a1a" />
      <rect x="152" y="104" width="8" height="8" fill="#1a1a1a" />
      <rect x="176" y="104" width="8" height="8" fill="#1a1a1a" />
      <rect x="10" y="120" width="8" height="8" fill="#1a1a1a" />
      <rect x="34" y="120" width="8" height="8" fill="#1a1a1a" />
      <rect x="72" y="120" width="8" height="8" fill="#1a1a1a" />
      <rect x="96" y="120" width="8" height="8" fill="#1a1a1a" />
      <rect x="112" y="120" width="8" height="8" fill="#1a1a1a" />
      <rect x="136" y="120" width="8" height="8" fill="#1a1a1a" />
      <rect x="160" y="120" width="8" height="8" fill="#1a1a1a" />
      <rect x="182" y="120" width="8" height="8" fill="#1a1a1a" />
      <rect x="72" y="140" width="8" height="8" fill="#1a1a1a" />
      <rect x="88" y="140" width="8" height="8" fill="#1a1a1a" />
      <rect x="112" y="140" width="8" height="8" fill="#1a1a1a" />
      <rect x="136" y="140" width="8" height="8" fill="#1a1a1a" />
      <rect x="168" y="140" width="8" height="8" fill="#1a1a1a" />
      <rect x="80" y="156" width="8" height="8" fill="#1a1a1a" />
      <rect x="104" y="156" width="8" height="8" fill="#1a1a1a" />
      <rect x="128" y="156" width="8" height="8" fill="#1a1a1a" />
      <rect x="152" y="156" width="8" height="8" fill="#1a1a1a" />
      <rect x="176" y="156" width="8" height="8" fill="#1a1a1a" />
      <rect x="72" y="172" width="8" height="8" fill="#1a1a1a" />
      <rect x="96" y="172" width="8" height="8" fill="#1a1a1a" />
      <rect x="120" y="172" width="8" height="8" fill="#1a1a1a" />
      <rect x="144" y="172" width="8" height="8" fill="#1a1a1a" />
      <rect x="182" y="172" width="8" height="8" fill="#1a1a1a" />
      <rect x="72" y="182" width="8" height="8" fill="#1a1a1a" />
      <rect x="104" y="182" width="8" height="8" fill="#1a1a1a" />
      <rect x="136" y="182" width="8" height="8" fill="#1a1a1a" />
      <rect x="160" y="182" width="8" height="8" fill="#1a1a1a" />
      {/* MMQR center logo mark */}
      <rect x="88" y="88" width="24" height="24" rx="3" fill="#00786f" />
      <text
        x="100"
        y="104"
        textAnchor="middle"
        fill="white"
        fontSize="10"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        QR
      </text>
    </svg>
  )
}

export default function PaymentForm({ totalAmount, currency, onCancel }: PaymentFormProps) {
  const { fadeInUp, staggerContainer } = useAnimation()
  const { formState, handleSubmit, handleCancel } = usePayment()

  const onCancel_ = () => {
    handleCancel()
    onCancel()
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="max-w-md mx-auto p-6"
    >
      <motion.h2
        variants={fadeInUp}
        className="text-2xl font-serif font-semibold text-slate-800 mb-1"
      >
        Scan to Pay
      </motion.h2>
      <motion.p variants={fadeInUp} className="text-sm text-slate-500 mb-6">
        Use KBZPay, Wave Money, AYAPay, or CBPay
      </motion.p>

      <motion.div
        variants={fadeInUp}
        className="flex flex-col items-center bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-6"
      >
        <div className="mb-3">
          <span className="inline-block bg-teal-700 text-white text-xs font-bold tracking-widest px-3 py-1 rounded-full">
            MMQR
          </span>
        </div>

        <div className="border-2 border-slate-100 rounded-xl p-3 mb-4">
          <MmqrQrCode />
        </div>

        <p className="text-slate-500 text-sm text-center mb-1">Amount to pay</p>
        <p className="text-2xl font-bold text-slate-800">
          {currency} {totalAmount.toFixed(2)}
        </p>
        <p className="text-xs text-slate-400 mt-1">The Evergreen Hill Hotel</p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6"
      >
        <p className="text-sm text-amber-700">
          After scanning and completing the payment in your app, tap <strong>"I've Paid"</strong>{' '}
          below.
        </p>
      </motion.div>

      {formState.error && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-4"
        >
          <p className="text-sm text-red-700">{formState.error}</p>
        </motion.div>
      )}

      <motion.div variants={fadeInUp} className="flex gap-3">
        <button
          type="button"
          onClick={onCancel_}
          disabled={formState.isProcessing}
          className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors disabled:opacity-50"
        >
          Cancel
        </button>
        <motion.button
          type="button"
          onClick={handleSubmit}
          disabled={formState.isProcessing}
          whileHover={{ scale: formState.isProcessing ? 1 : 1.02 }}
          whileTap={{ scale: formState.isProcessing ? 1 : 0.98 }}
          className="flex-1 px-6 py-3 bg-teal-700 text-white rounded-lg font-medium hover:bg-teal-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formState.isProcessing ? 'Confirming...' : "I've Paid"}
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
