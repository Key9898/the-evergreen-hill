import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import { Header } from '../Layout'
import { Footer } from '../Layout'
import { ScrollToTopButton } from '../Layout'
import TeamBanner from './TeamBanner'
import FoundersCard from './Founders'
import { useState } from 'react'
const GeneralManagerImg = '/Team/general_manager.jpg'
const HeadOfGuestRelationsImg = '/Team/head_of_guest_relations.jpg'
const HeadChefImg = '/Team/head_chef.jpg'
const RestaurantManagerImg = '/Team/restaurant_manager.jpg'
const HeadOfHousekeepingImg = '/Team/head_of_housekeeping.jpg'
const EventsManagerImg = '/Team/events_manager.jpg'
const SpaAndWellnessManagerImg = '/Team/spa_wellness_manager.jpg'
const LeadConciergeImg = '/Team/lead_concierge.jpg'

const people = [
  {
    name: 'Nang Aye Aye Lwin',
    title: '"Morning Mist in Kalaw"',
    role: 'General Manager',
    email: 'nangayeayelwin@evergreenhill.com',
    telephone: '+95 9 795 123 456',
    imageAlt: 'General Manager',
    imageUrl: GeneralManagerImg,
  },
  {
    name: 'Min Thant',
    title: '"Sharing Guest Stories"',
    role: 'Head of Guest Relations',
    email: 'minthant@evergreenhill.com',
    telephone: '+95 9 250 777 888',
    imageAlt: 'Head of Guest Relations',
    imageUrl: HeadOfGuestRelationsImg,
  },
  {
    name: 'U Sai Myo',
    title: '"Fresh Local Produce"',
    role: 'Head Chef',
    email: 'saimyo@evergreenhill.com',
    telephone: '+95 9 688 999 000',
    imageAlt: 'Head Chef',
    imageUrl: HeadChefImg,
  },
  {
    name: 'Ko Pyae Sone',
    title: '"Local Coffee Beans"',
    role: 'Restaurant Manager',
    email: 'pyaesone@evergreenhill.com',
    telephone: '+95 9 455 121 212',
    imageAlt: 'Restaurant Manager',
    imageUrl: RestaurantManagerImg,
  },
  {
    name: 'Daw Khin Myo Chit',
    title: '"Creating Serene Spaces"',
    role: 'Head of Housekeeping',
    email: 'khinmyochit@evergreenhill.com',
    telephone: '+95 9 880 333 444',
    imageAlt: 'Head of Housekeeping',
    imageUrl: HeadOfHousekeepingImg,
  },
  {
    name: 'Sandy Cho',
    title: '"Celebrating Moments"',
    role: 'Events Manager',
    email: 'sandycho@evergreenhill.com',
    telephone: '+95 9 699 111 222',
    imageAlt: 'Events Manager',
    imageUrl: EventsManagerImg,
  },
  {
    name: 'Ma Thida Win',
    title: '"Aromatic Shan Tea"',
    role: 'Spa & Wellness Manager',
    email: 'thidawin@evergreenhill.com',
    telephone: '+95 9 420 987 654',
    imageAlt: 'Spa & Wellness Manager',
    imageUrl: SpaAndWellnessManagerImg,
  },
  {
    name: 'May Thet Hnin',
    title: '"Discovering Hidden Trails"',
    role: 'Lead Concierge',
    email: 'maythethnin@evergreenhill.com',
    telephone: '+95 9 777 555 666',
    imageAlt: 'Lead Concierge',
    imageUrl: LeadConciergeImg,
  },
]

interface TeamProps {
  onNavigate?: (page: string) => void
}

export default function Team({ onNavigate }: TeamProps) {
  const [showFounders, setShowFounders] = useState(false)
  const { fadeInUp, staggerContainer } = useAnimation()

  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} activePage="ourStory" />
      <div className="relative -mt-24 sm:-mt-28">
        <TeamBanner onNavigate={onNavigate} />
      </div>

      <motion.div
        className="mt-12 mx-auto max-w-7xl px-4 lg:px-8"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-semibold tracking-tight text-teal-600">
          Meet Our Team
        </h2>
        <p className="mt-2 max-w-2xl mx-auto text-center text-lg/8 text-slate-700">
          The heart of The Evergreen Hill lies in its people. Our team is passionate about
          hospitality and committed to creating unforgettable experiences. Get to know the dedicated
          faces who make your stay truly special.
        </p>
      </motion.div>

      {/* Founders Card trigger */}
      <div className="mt-12 mx-auto max-w-7xl sm:max-w-2xl lg:max-w-2xl px-6 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => setShowFounders((v) => !v)}
          aria-expanded={showFounders}
          aria-controls="founders-panel"
          className="w-full flex justify-center items-center rounded-md px-4 py-2 bg-teal-100/10 hover:bg-teal-100/20 border border-teal-200 text-slate-700 font-medium shadow-lg transition-colors duration-200"
        >
          A Note from Our Founders
          {/* Arrow Icon */}
          <svg
            className={`-mr-1 ml-2 mt-0.5 h-6 w-6 transform transition-transform duration-200 ${
              showFounders ? 'rotate-180' : 'rotate-0'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Slide-down panel */}
      <div
        id="founders-panel"
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${showFounders ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
        aria-hidden={!showFounders}
      >
        <div className="overflow-hidden">
          <FoundersCard onNavigate={onNavigate} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <motion.ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
        >
          {people.map((person) => (
            <motion.li
              key={person.email}
              className="col-span-1 flex flex-col divide-y divide-slate-200 rounded-md bg-white text-center shadow-sm"
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-1 flex-col p-8">
                <img
                  alt={person.imageAlt}
                  src={person.imageUrl}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="mx-auto size-32 shrink-0 rounded-md shadow-lg bg-slate-300 outline -outline-offset-1 outline-black/5"
                />
                <h3 className="mt-6 text-base font-medium text-teal-700">{person.name}</h3>
                <dl className="mt-1 flex grow flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-base text-slate-700">{person.title}</dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="mt-3">
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-base font-medium text-green-700 inset-ring inset-ring-green-600/20">
                      {person.role}
                    </span>
                  </dd>
                </dl>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-slate-200">
                  <div className="flex w-0 flex-1">
                    <a
                      href={`mailto:${person.email}`}
                      className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-slate-900"
                    >
                      <EnvelopeIcon aria-hidden="true" className="size-5 text-slate-400" />
                      Email
                    </a>
                  </div>
                  <div className="-ml-px flex w-0 flex-1">
                    <a
                      href={`tel:${person.telephone}`}
                      className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-slate-900"
                    >
                      <PhoneIcon aria-hidden="true" className="size-5 text-slate-400" />
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <ScrollToTopButton />
      <Footer onNavigate={onNavigate} />
    </div>
  )
}
