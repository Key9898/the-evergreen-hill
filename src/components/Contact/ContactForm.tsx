import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import { useContactForm } from '../../hooks/useContactForm'

interface ContactFormProps {
  className?: string
}

export default function ContactForm({ className = '' }: ContactFormProps) {
  const { fadeInUp } = useAnimation()
  const { formData, isSubmitting, isSuccess, error, handleChange, handleSubmit } = useContactForm()

  return (
    <motion.div
      className={className}
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-50px' }}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm font-semibold text-slate-900">
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-slate-900">
              Email Address
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="youremail@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="subject" className="block text-sm font-semibold text-slate-900">
              Subject
            </label>
            <div className="mt-2.5">
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                aria-label="Select a subject"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600"
              >
                <option value="" disabled>
                  Select a subject
                </option>
                <option value="Reservations">Reservations</option>
                <option value="Concierge Services">Concierge Services</option>
                <option value="Events & Celebrations">Events & Celebrations</option>
                <option value="Spa & Wellness">Spa & Wellness</option>
                <option value="Activities">Activities</option>
                <option value="General Inquiries">General Inquiries</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-slate-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                placeholder="Share your thoughts or questions with us..."
                required
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600"
              />
            </div>
          </div>
        </div>
        {isSuccess && (
          <div className="rounded-md bg-green-50 p-4">
            <p className="text-sm text-green-700">
              Thank you for your message! We'll get back to you soon.
            </p>
          </div>
        )}
        {error && (
          <div className="rounded-md bg-red-50 p-4">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}
        <div className="mt-4 flex justify-end">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            className="rounded-md bg-teal-700 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </div>
      </form>
    </motion.div>
  )
}
