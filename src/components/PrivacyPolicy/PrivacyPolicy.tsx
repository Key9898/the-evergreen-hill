import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import { Header } from '../Layout'
import { Footer } from '../Layout'
import { ScrollToTopButton } from '../Layout'
import PrivacyBanner from './PrivacyBanner'

const privacyItems = [
  {
    id: 1,
    title: 'Information We Collect',
    content:
      'We collect personal information you provide during the booking process, such as your name, email address, and phone number. We may also collect non-personal data about your website usage to improve our services.',
  },
  {
    id: 2,
    title: 'How We Use Your Information',
    content:
      'Your information is used to process your booking, communicate with you about your reservation, and improve our website. We will only send you marketing emails if you have opted-in to receive them.',
  },
  {
    id: 3,
    title: 'Data Security',
    content:
      'We take reasonable measures to protect your personal information from unauthorized access or disclosure.',
  },
  {
    id: 4,
    title: 'Third-Party Disclosure',
    content:
      'We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website or servicing you (e.g., payment gateways), so long as those parties agree to keep this information confidential.',
  },
  {
    id: 5,
    title: 'Contact Us ',
    content:
      'If you have any questions about this Policy, please feel free to contact us by email at info@evergreenhillhotel.com or by phone at +95 9 450 123 459.',
  },
]

interface PrivacyPolicyProps {
  onNavigate?: (page: string) => void
}

export default function PrivacyPolicy({ onNavigate }: PrivacyPolicyProps) {
  const { fadeInUp, staggerContainer } = useAnimation()
  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} activePage="ourStory" />
      <div className="relative -mt-24 sm:-mt-28">
        <PrivacyBanner onNavigate={onNavigate} />
      </div>
      <div className="mx-auto max-w-4xl px-4 py-16 pt-12 sm:px-6 sm:py-16 sm:py-12 lg:px-8 lg:py-16 lg:pt-12">
        <motion.div
          className="text-center mb-8 sm:mb-8"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-teal-600">
            Privacy Policy
          </h2>
          <p className="mt-4 sm:mt-6 text-lg/8 text-slate-700 max-w-3xl mx-auto">
            Your trust is the foundation of our hospitality. Learn how we are committed to
            protecting your personal information with care and transparency.
          </p>
        </motion.div>

        <motion.div
          className="space-y-6 sm:space-y-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
        >
          {privacyItems.map((item) => (
            <motion.div key={item.id} className="flex gap-4 sm:gap-6" variants={fadeInUp}>
              {/* Number Circle */}
              <div className="flex-shrink-0 mb-8">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-700 hover:bg-teal-600 hover:scale-105 text-white rounded-md flex items-center justify-center font-semibold text-sm sm:text-base">
                  {item.id}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold text-teal-700 mt-1 mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-base leading-6 sm:leading-7 text-slate-700">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ScrollToTopButton />
      <Footer onNavigate={onNavigate} />
    </div>
  )
}
