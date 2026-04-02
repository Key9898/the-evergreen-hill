import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import { Header } from '../Layout'
import FAQsBanner from './FAQsBanner'
import Footer from '../Layout/Footer'
import ScrollToTopButton from '../Layout/ScrollToTopButton'

const bookingPaymentFaqs = [
  {
    question: 'How can I book a room?',
    answer:
      "You can book directly through the 'Book Your Stay' form on our website. For special assistance or group bookings, please contact us via our contact page.",
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept major credit cards (Visa, Mastercard) for online bookings. We also accept local bank transfers and cash payments (MMK or USD) at the hotel.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'You can cancel free of charge up to 7 days before your arrival date. Cancellations made within 3-7 days will incur a 50% charge. Cancellations made less than 3 days before arrival are non-refundable.',
  },
  {
    question: 'Is a deposit or full payment required at the time of booking?',
    answer:
      'Yes, we require a 50% deposit to confirm your reservation. The remaining balance is payable upon check-in.',
  },
  {
    question: 'Can I change my booking dates after it is confirmed?',
    answer:
      'Date changes are possible subject to room availability and must be requested at least 7 days prior to your original arrival date. Rate differences may apply.',
  },
]

const hotelServicesFaqs = [
  {
    question: 'What are the check-in and check-out times?',
    answer: 'Check-in time is 2:00 PM onwards, and check-out time is before 12:00 PM (noon).',
  },
  {
    question: 'Is breakfast included with the room?',
    answer: 'Yes, a complimentary breakfast is included for all our guests.',
  },
  {
    question: 'Is there free Wi-Fi?',
    answer:
      'Yes, we offer complimentary high-speed Wi-Fi access in all rooms and public areas of the hotel.',
  },
  {
    question: 'Do you have backup power for electricity cuts?',
    answer:
      'Yes, our hotel is equipped with a generator to ensure an uninterrupted power supply 24/7.',
  },
  {
    question: 'Are pets allowed?',
    answer:
      'Unfortunately, we do not allow pets at our hotel to ensure the comfort of all our guests.',
  },
]

const locationTransportationFaqs = [
  {
    question: 'Do you offer airport transfers from Heho Airport (HEH)?',
    answer:
      'Yes, we can arrange private airport transfers for an additional fee. Please contact our Concierge Service at least 48 hours in advance to make arrangements.',
  },
  {
    question: 'Is parking available at the hotel?',
    answer: 'Yes, we offer complimentary and secure on-site parking for all our guests.',
  },
  {
    question: 'How far is the hotel from the town center?',
    answer:
      'We are conveniently located just a 5-minute drive or a pleasant 15-minute walk from the Kalaw central market and town center.',
  },
  {
    question: 'How can I get around Kalaw?',
    answer:
      'Our concierge can gladly assist you with arranging local taxis, tuk-tuks, or bicycle/motorbike rentals to explore the town and its surroundings.',
  },
  {
    question: 'What is the best way to get to the hotel from the bus or train station?',
    answer:
      'The hotel is a short 5-10 minute taxi ride from both the Kalaw bus station and the historic train station. Taxis are readily available at both locations.',
  },
]

interface FAQsProps {
  onNavigate?: (page: string) => void
}

const FAQSection = ({ title, faqs }: { title: string; faqs: typeof bookingPaymentFaqs }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-teal-700 mb-4 text-center lg:text-left">{title}</h3>
    <div className="space-y-3">
      {faqs.map((faq) => (
        <Disclosure
          key={faq.question}
          as="div"
          className="rounded-lg bg-slate-50 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-200"
        >
          <div className="p-3">
            <DisclosureButton className="group flex w-full items-start justify-between text-left text-slate-900">
              <span className="text-base font-medium leading-6 pr-3">{faq.question}</span>
              <span className="ml-2 flex h-5 items-center text-slate-950 group-data-open:text-slate-900 flex-shrink-0">
                <PlusIcon aria-hidden="true" className="size-3 sm:size-4 group-data-open:hidden" />
                <MinusIcon
                  aria-hidden="true"
                  className="size-3 sm:size-4 group-not-data-open:hidden"
                />
              </span>
            </DisclosureButton>
            <DisclosurePanel as="dd" className="mt-2 pr-4">
              <p className="text-base leading-6 text-slate-600">{faq.answer}</p>
            </DisclosurePanel>
          </div>
        </Disclosure>
      ))}
    </div>
  </div>
)

export default function FAQs({ onNavigate }: FAQsProps) {
  const { fadeInUp, staggerContainer } = useAnimation()
  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} activePage="ourStory" />
      <div className="relative -mt-24 sm:-mt-28">
        <FAQsBanner onNavigate={onNavigate} />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 pt-12 sm:py-16 sm:pt-12 lg:px-8 lg:py-16 lg:pt-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12 sm:mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-teal-600">
              Frequently asked questions
            </h2>
            <p className="mt-4 sm:mt-6 text-lg/8 text-slate-700 max-w-3xl mx-auto">
              Your peace of mind is our priority. Find clear answers to your questions here and plan
              your serene escape with confidence.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.div variants={fadeInUp}>
              <FAQSection title="Booking & Payment" faqs={bookingPaymentFaqs} />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <FAQSection title="Hotel Services & Facilities" faqs={hotelServicesFaqs} />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <FAQSection title="Location & Transportation" faqs={locationTransportationFaqs} />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <ScrollToTopButton />
      <Footer onNavigate={onNavigate} />
    </div>
  )
}
