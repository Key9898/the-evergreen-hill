import { motion } from 'framer-motion'
import { UserCircleIcon, PencilSquareIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useAnimation } from '../../hooks/useAnimation'
import { useUserProfile } from '../../hooks/useUserProfile'

interface UserProfileProps {
  onNavigate?: (page: string) => void
}

export default function UserProfile({ onNavigate }: UserProfileProps) {
  const { fadeInUp, staggerContainer } = useAnimation()
  const {
    user,
    formState,
    handleEditToggle,
    handleChange,
    handleSave,
    handleCancel,
    clearMessages,
  } = useUserProfile()

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Please sign in to view your profile.</p>
      </div>
    )
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="min-h-screen bg-slate-50 py-12 px-4"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          variants={fadeInUp}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-teal-700 to-emerald-700 px-6 py-8 flex items-center gap-4">
            <div className="size-16 rounded-full bg-white/20 flex items-center justify-center">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName ?? ''}
                  className="size-16 rounded-full object-cover"
                />
              ) : (
                <UserCircleIcon className="size-12 text-white" />
              )}
            </div>
            <div>
              <h1 className="text-white font-serif text-2xl font-semibold">
                {user.displayName ?? 'Guest'}
              </h1>
              <p className="text-teal-100 text-sm">{user.email}</p>
              <span className="inline-block mt-1 text-xs bg-white/20 text-white px-2 py-0.5 rounded-full capitalize">
                {user.role}
              </span>
            </div>
          </div>

          <div className="p-6">
            {formState.successMessage && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-teal-50 border border-teal-200 rounded-lg flex items-center justify-between"
              >
                <p className="text-sm text-teal-700">{formState.successMessage}</p>
                <button
                  type="button"
                  onClick={clearMessages}
                  className="text-teal-500 hover:text-teal-700"
                >
                  <XMarkIcon className="size-4" />
                </button>
              </motion.div>
            )}

            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-800">Profile Details</h2>
              {!formState.isEditing && (
                <button
                  type="button"
                  onClick={handleEditToggle}
                  className="flex items-center gap-1.5 text-sm text-teal-600 hover:text-teal-700 font-medium"
                >
                  <PencilSquareIcon className="size-4" />
                  Edit
                </button>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-500 mb-1">Display Name</label>
                {formState.isEditing ? (
                  <input
                    type="text"
                    value={formState.displayName}
                    onChange={(e) => handleChange('displayName', e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                ) : (
                  <p className="text-slate-800 font-medium">{user.displayName ?? '—'}</p>
                )}
              </div>

              <div>
                <label className="block text-sm text-slate-500 mb-1">Email</label>
                <p className="text-slate-800 font-medium">{user.email}</p>
              </div>

              <div>
                <label className="block text-sm text-slate-500 mb-1">Phone</label>
                {formState.isEditing ? (
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+95 9 ..."
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                ) : (
                  <p className="text-slate-800 font-medium">{formState.phone || '—'}</p>
                )}
              </div>

              <div>
                <label className="block text-sm text-slate-500 mb-1">Country</label>
                {formState.isEditing ? (
                  <input
                    type="text"
                    value={formState.country}
                    onChange={(e) => handleChange('country', e.target.value)}
                    placeholder="Myanmar"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                ) : (
                  <p className="text-slate-800 font-medium">{formState.country || '—'}</p>
                )}
              </div>

              <div>
                <label className="block text-sm text-slate-500 mb-1">Member Since</label>
                <p className="text-slate-800 font-medium">
                  {new Date(user.createdAt).toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>

            {formState.isEditing && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-3 mt-6"
              >
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50"
                >
                  <XMarkIcon className="size-4" />
                  Cancel
                </button>
                <motion.button
                  type="button"
                  onClick={handleSave}
                  disabled={formState.isSaving}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-teal-700 text-white rounded-lg font-medium hover:bg-teal-800 disabled:opacity-50"
                >
                  <CheckIcon className="size-4" />
                  {formState.isSaving ? 'Saving...' : 'Save Changes'}
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.button
          variants={fadeInUp}
          type="button"
          onClick={() => onNavigate?.('guestReviews')}
          className="mt-4 w-full py-3 border border-slate-300 text-slate-700 rounded-xl font-medium hover:bg-white transition-colors"
        >
          View My Booking History
        </motion.button>
      </div>
    </motion.div>
  )
}
