import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import { Header } from '../Layout'
import { Footer } from '../Layout'
import { ScrollToTopButton } from '../Layout'
import TermsBanner from './TermsBanner'

const termsItems = [
  {
    id: 1,
    title: 'Bookings & Payment',
    content:
      'All bookings are confirmed upon successful payment. We reserve the right to cancel bookings without payment. Prices are subject to change without prior notice.',
  },
  {
    id: 2,
    title: 'Cancellation Policy',
    content:
      'Cancellations must be made in accordance with the policy stated in our FAQs. No-shows will be charged the full amount of the booking.',
  },
  {
    id: 3,
    title: 'Guest Conduct',
    content:
      'All guests are expected to behave in a respectful manner. Any damage to hotel property will be charged to the guest. The hotel is a smoke-free property, except in designated outdoor areas.',
  },
  {
    id: 4,
    title: 'Liability',
    content:
      'The hotel is not responsible for any lost, stolen, or damaged personal belongings of the guests.',
  },
  {
    id: 5,
    title: 'Contact Us ',
    content:
      'If you have any questions about this Policy, please feel free to contact us by email at info@evergreenhillhotel.com or by phone at +95 9 450 123 459.',
  },
]

interface TermsOfServiceProps {
  onNavigate?: (page: string) => void
}

export default function TermsOfService({ onNavigate }: TermsOfServiceProps) {
  const { fadeInUp, staggerContainer } = useAnimation()
  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} activePage="ourStory" />
      <div className="relative -mt-24 sm:-mt-28">
        <TermsBanner onNavigate={onNavigate} />
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
            Terms of Service
          </h2>
          <p className="mt-4 sm:mt-6 text-lg/8 text-slate-700 max-w-3xl mx-auto">
            To ensure a clear understanding and a smooth, wonderful stay for all our guests, please
            review our booking and hotel policies.
          </p>
        </motion.div>

        <motion.div
          className="space-y-6 sm:space-y-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
        >
          {termsItems.map((item) => (
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
