import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import { Header } from '../Layout'
import Footer from '../Layout/Footer'
import ScrollToTopButton from '../Layout/ScrollToTopButton'
import ContactForm from './ContactForm'
import HotelMap from './HotelMap'
import ContactBanner from './ContactBanner'

interface ContactProps {
  onNavigate?: (page: string) => void
}

export default function Contact({ onNavigate }: ContactProps) {
  const { fadeInLeft, staggerContainer, fadeInUp } = useAnimation()

  const handleNavigation = (page: string) => {
    onNavigate?.(page)
  }

  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} activePage="contact" />
      <div className="relative -mt-40 sm:-mt-44 lg:-mt-48">
        <ContactBanner onNavigate={onNavigate} />
      </div>

      <div className="bg-white relative z-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto md:mx-0 md:max-w-none divide-y divide-slate-100">
            <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
              <motion.div
                variants={fadeInLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-50px' }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-teal-600">
                  Get in touch
                </h2>
                <ContactForm className="mt-4" />
              </motion.div>
              <motion.div
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-50px' }}
              >
                <motion.div variants={fadeInUp} className="rounded-md bg-slate-50 p-10">
                  <h3 className="text-xl font-semibold text-teal-700">Reservations</h3>
                  <p className="mt-2 text-base text-slate-700">
                    For any booking inquiries, accommodation details, or personal assistance with
                    your reservation.
                  </p>
                  <dl className="mt-3 space-y-1 text-base/6 text-slate-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a
                          href="mailto:reservations@evergreenhillhotel.com"
                          className="font-semibold text-teal-600 hover:text-teal-500 hover:underline"
                        >
                          reservations@evergreenhillhotel.com
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+95 9 450 123 456</dd>
                    </div>
                  </dl>
                </motion.div>
                <motion.div variants={fadeInUp} className="rounded-md bg-slate-50 p-10">
                  <h3 className="text-xl font-semibold text-teal-700">Concierge Service</h3>
                  <p className="mt-2 text-base text-slate-700">
                    Allow our team to assist with local tour arrangements, transportation, and
                    special requests.
                  </p>
                  <dl className="mt-3 space-y-1 text-base/6 text-slate-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a
                          href="mailto:concierge@evergreenhillhotel.com"
                          className="font-semibold text-teal-600 hover:text-teal-500 hover:underline"
                        >
                          concierge@evergreenhillhotel.com
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+95 9 450 123 457</dd>
                    </div>
                  </dl>
                </motion.div>
                <motion.div variants={fadeInUp} className="rounded-md bg-slate-50 p-10">
                  <h3 className="text-xl font-semibold text-teal-700">Events & Celebrations</h3>
                  <p className="mt-2 text-base text-slate-700">
                    From corporate meetings to special celebrations, let our team help you plan a
                    memorable event.
                  </p>
                  <dl className="mt-3 space-y-1 text-base/6 text-slate-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a
                          href="mailto:events@evergreenhillhotel.com"
                          className="font-semibold text-teal-600 hover:text-teal-500 hover:underline"
                        >
                          events@evergreenhillhotel.com
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+95 9 450 123 458</dd>
                    </div>
                  </dl>
                </motion.div>
                <motion.div variants={fadeInUp} className="rounded-md bg-slate-50 p-10">
                  <h3 className="text-xl font-semibold text-teal-700">General Inquiries</h3>
                  <p className="mt-2 text-base text-slate-700">
                    For all other questions or for more information about your stay at The Evergreen
                    Hill.
                  </p>
                  <dl className="mt-3 space-y-1 text-base/6 text-slate-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a
                          href="mailto:info@evergreenhillhotel.com"
                          className="font-semibold text-teal-600 hover:text-teal-500 hover:underline"
                        >
                          info@evergreenhillhotel.com
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+95 9 450 123 459</dd>
                    </div>
                  </dl>
                </motion.div>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 gap-10 py-16 pb-16 lg:grid-cols-3">
              <motion.div
                variants={fadeInLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-50px' }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-teal-600">
                  Visit Us
                </h2>
                <HotelMap className="mt-4" />
              </motion.div>
              <motion.div
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-50px' }}
              >
                <motion.div variants={fadeInUp} className="rounded-md bg-slate-50 p-10">
                  <h3 className="text-xl font-semibold text-teal-700">Our Address</h3>
                  <address className="mt-3 space-y-1 text-base text-slate-700 not-italic">
                    <p>No. 10, Pinewood Road, Ward (3),</p>
                    <p>Kalaw, Shan State, Myanmar.</p>
                    <p>The Evergreen Kalaw, Mountain Views.</p>
                  </address>
                </motion.div>
                <motion.div variants={fadeInUp} className="rounded-md bg-slate-50 p-10">
                  <h3 className="text-xl font-semibold text-teal-700">Opening Hours</h3>
                  <address className="mt-3 space-y-1 text-base text-slate-700 not-italic">
                    <p>Reception: 24/7</p>
                    <p>Dining & Bar: 6:30 AM - 11:00 PM</p>
                    <p>Room Service: 7:00 AM - 11:00 PM</p>
                    <p>Swimming Pool: 7:00 AM - 9:00 PM</p>
                  </address>
                </motion.div>
                <motion.div variants={fadeInUp} className="rounded-md bg-slate-50 p-10">
                  <h3 className="text-xl font-semibold text-teal-700">Spa & Wellness Center</h3>
                  <address className="mt-3 space-y-1 text-base text-slate-700 not-italic">
                    <p>Traditional Shan Massage</p>
                    <p>Fully-Equipped Fitness Center</p>
                    <p>Yoga & Meditation Sessions</p>
                    <motion.button
                      type="button"
                      onClick={() => handleNavigation('spaAndWellnessCenter')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="text-teal-600 hover:text-teal-500 hover:underline font-medium bg-transparent border-none cursor-pointer p-0 text-left"
                    >
                      View Full Offerings
                    </motion.button>
                  </address>
                </motion.div>
                <motion.div variants={fadeInUp} className="rounded-md bg-slate-50 p-10">
                  <h3 className="text-xl font-semibold text-teal-700">Activities</h3>
                  <address className="mt-3 space-y-1 text-base text-slate-700 not-italic">
                    <p>Guided Mountain Treks</p>
                    <p>Local Cycling Tours</p>
                    <p>Cultural Village Visits</p>
                    <motion.button
                      type="button"
                      onClick={() => handleNavigation('activities')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="text-teal-600 hover:text-teal-500 hover:underline font-medium bg-transparent border-none cursor-pointer p-0 text-left"
                    >
                      Discover All Experiences
                    </motion.button>
                  </address>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
      <ScrollToTopButton />
    </div>
  )
}
