import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import { Header } from '../Layout'
import Footer from '../Layout/Footer'
import ScrollToTopButton from '../Layout/ScrollToTopButton'
import EventsBanner from './EventsBanner'
import EventSpaces from './EventSpaces'
import EventsCTA from './EventsCTA'
const WeddingAndCelebrationsEventsImg = '/Events/wedding_celebrations_events.jpg'
const CorporateAndMeetingEventsImg = '/Events/corporate_meeting_events.jpg'
const PrivateDiningAndGatheringEventsImg = '/Events/private_events.jpg'

const posts = [
  {
    id: 1,
    title: 'Weddings & Celebrations',
    description:
      'From fairytale weddings under the open sky to joyful birthday and anniversary parties, let us create the perfect celebration for your most cherished moments.',
    imageAlt: 'Wedding and Celebrations Events',
    imageUrl: WeddingAndCelebrationsEventsImg,
  },
  {
    id: 2,
    title: 'Corporate Retreats & Meetings',
    description:
      'Inspire your team in a serene and focused environment. Our elegant meeting spaces and tailored services are perfect for productive corporate retreats, workshops, and important meetings.',
    imageAlt: 'Corporate and Meeting Events',
    imageUrl: CorporateAndMeetingEventsImg,
  },
  {
    id: 3,
    title: 'Private Dining & Gatherings',
    description:
      'Host an exclusive dinner or an intimate social gathering. Our team can arrange a personalized menu and a private setting for you and your guests to connect and celebrate.',
    imageAlt: 'Private Dining and Gathering Events',
    imageUrl: PrivateDiningAndGatheringEventsImg,
  },
]

interface EventsProps {
  onNavigate?: (page: string) => void
}

export default function Events({ onNavigate }: EventsProps) {
  const { fadeInDown, fadeInUp, staggerContainer } = useAnimation()

  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} activePage="gallery" />
      <div className="relative -mt-24 sm:-mt-28">
        <EventsBanner onNavigate={onNavigate} />
      </div>

      <div className="bg-white py-16 pt-12 pb-0 sm:py-16 sm:pt-12 sm:pb-0 lg:py-16 lg:pt-12 lg:pb-0">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl lg:max-w-5xl text-center"
            variants={fadeInDown}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-teal-600">
              The Perfect Setting for Every Story
            </h2>
            <p className="mt-2 text-lg/8 text-slate-700">
              At The Evergreen Hill, we believe every event is a unique story waiting to be told.
              Our historic colonial architecture provides a timeless backdrop, the serene beauty of
              the Kalaw highlands offers unparalleled scenery, and our dedicated events team ensures
              every detail is flawlessly executed.
            </p>
          </motion.div>
          <motion.div
            className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:max-w-none sm:grid-cols-1 sm:gap-x-6 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
          >
            {posts.map((post) => (
              <motion.article
                key={post.id}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full group overflow-hidden rounded-md">
                  <img
                    alt={post.imageAlt}
                    src={post.imageUrl}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="aspect-video w-full rounded-md bg-slate-100 object-cover sm:aspect-2/1 lg:aspect-3/2 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-md inset-ring inset-ring-slate-900/10" />
                </div>
                <div className="flex max-w-xl grow flex-col justify-between">
                  <div className="group relative grow">
                    <h3 className="mt-3 text-xl font-semibold text-teal-700">{post.title}</h3>
                    <p className="mt-5 text-base text-slate-700">{post.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
      <EventSpaces />
      <EventsCTA />
      <Footer onNavigate={onNavigate} />
      <ScrollToTopButton />
    </div>
  )
}
