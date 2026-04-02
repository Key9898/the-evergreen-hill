import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import { Header } from '../Layout'
import Footer from '../Layout/Footer'
import ScrollToTopButton from '../Layout/ScrollToTopButton'
import ExperiencesBanner from './ExperiencesBanner'
const RoomsAndSuitesExperiencesImg = '/Experiences/rooms_suites_experiences.jpg'
const DiningAndBarExperiencesImg = '/Experiences/dining_bar_experiences.jpg'
const SwimmingPoolExperiencesImg = '/Experiences/swimming_pool_experiences.jpg'
const SpaAndWellnessCenterExperiencesImg = '/Experiences/spa_experiences.jpg'
const ActivitesExperiencesImg = '/Experiences/activities_experiences.jpg'

const posts = [
  {
    id: 1,
    title: 'Your Private Sanctuary',
    description:
      'Discover our collection of thoughtfully designed rooms and suites, where timeless colonial elegance meets modern comfort. Find the perfect backdrop for your serene Kalaw escape.',
    imageAlt: 'Rooms and Suites Experiences',
    imageUrl: RoomsAndSuitesExperiencesImg,
    category: { title: 'Rooms & Suites', href: 'roomsAndSuites' },
    button: {
      text: 'View Your Stay',
      href: 'roomsAndSuites',
    },
  },
  {
    id: 2,
    title: 'A Taste of the Highlands',
    description:
      'Indulge in a culinary journey at our signature restaurant and bar. Our chefs blend authentic Shan flavors with international cuisine, all served with panoramic mountain views.',
    imageAlt: 'Dining and Bar Experiences',
    imageUrl: DiningAndBarExperiencesImg,
    category: { title: 'Dining & Bar', href: 'DiningAndBar' },
    button: {
      text: 'View The Restaurant',
      href: 'DiningAndBar',
    },
  },
  {
    id: 3,
    title: 'Poolside Serenity',
    description:
      'Relax and unwind by our temperature-controlled swimming pool. Order a refreshing drink and soak in the breathtaking, uninterrupted views of the surrounding mountains.',
    imageAlt: 'Swimming Pool Experiences',
    imageUrl: SwimmingPoolExperiencesImg,
    category: { title: 'Swimming Pool', href: 'swimmingPool' },
    button: {
      text: 'Relax & Unwind',
      href: 'swimmingPool',
    },
  },
  {
    id: 4,
    title: 'For Body & Mind',
    description:
      'Find your balance at our wellness sanctuary. Restore with a traditional Shan massage in our spa or recharge in our fully-equipped fitness center. Your well-being is our priority.',
    imageAlt: 'Spa and Wellness Center Experiences',
    imageUrl: SpaAndWellnessCenterExperiencesImg,
    category: { title: 'Spa & Wellness Center', href: 'spaAndWellnessCenter' },
    button: {
      text: 'Discover Wellness',
      href: 'spaAndWellnessCenter',
    },
  },
  {
    id: 5,
    title: 'Adventures in Kalaw',
    description:
      'Kalaw is a paradise for explorers. From guided mountain treks to immersive village tours, our concierge is ready to help you plan your perfect adventure.',
    imageAlt: 'Activities Experiences',
    imageUrl: ActivitesExperiencesImg,
    category: { title: 'Activities', href: 'activities' },
    button: {
      text: 'Plan Your Adventure',
      href: 'activities',
    },
  },
]

interface ExperiencesProps {
  onNavigate?: (page: string) => void
}

export default function Experiences({ onNavigate }: ExperiencesProps) {
  const { fadeInUp, staggerContainer } = useAnimation()
  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} activePage="experiences" />
      <div className="relative -mt-40 sm:-mt-44 lg:-mt-48">
        <ExperiencesBanner onNavigate={onNavigate} />
      </div>

      <div className="bg-white py-16 lg:py-16 lg:pt-12 lg:pb-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-teal-600">
              A World of Experiences
            </h2>
            <p className="mt-2 text-lg/8 text-slate-700">
              From serene relaxation to culinary journeys and mountain adventures, discover the
              curated experiences that await you at The Evergreen Hill.
            </p>
          </motion.div>
          <motion.div
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:max-w-none sm:gap-x-6 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-12"
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
                className={`flex flex-col items-start justify-between ${
                  post.id === 1
                    ? 'lg:col-start-1 lg:col-span-4'
                    : post.id === 2
                      ? 'lg:col-start-5 lg:col-span-4'
                      : post.id === 3
                        ? 'lg:col-start-9 lg:col-span-4'
                        : post.id === 4
                          ? 'lg:col-start-1 lg:col-span-6 lg:row-start-2'
                          : post.id === 5
                            ? 'lg:col-start-7 lg:col-span-6 lg:row-start-2'
                            : ''
                }`}
              >
                {/* image + content */}
                <div className="relative w-full group overflow-hidden rounded-md">
                  <img
                    alt={post.imageAlt}
                    src={post.imageUrl}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="aspect-video w-full shadow-lg bg-slate-100 object-cover sm:aspect-2/1 lg:aspect-3/2 transform-gpu transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-md shadow-lg inset-ring inset-ring-slate-900/10" />
                </div>
                {/* description + button */}
                <div className="flex max-w-xl grow flex-col justify-between">
                  <div className="mt-8 flex items-center gap-x-4 text-base">
                    <button
                      type="button"
                      onClick={() => onNavigate?.(post.category.href)}
                      className="relative z-10 rounded-md bg-teal-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-teal-100"
                    >
                      {post.category.title}
                    </button>
                  </div>
                  <div className="relative grow">
                    <p
                      className={`mt-5 ${post.id <= 3 ? '' : 'line-clamp-3'} text-base text-slate-700`}
                    >
                      {post.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                    <motion.button
                      type="button"
                      onClick={() => onNavigate?.(post.button.href)}
                      className="relative z-10 rounded-md shadow-lg shadow-teal-50 bg-teal-700 px-3 py-1.5 font-medium text-white hover:bg-teal-600"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {post.button.text}
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
      <ScrollToTopButton />
      <Footer onNavigate={onNavigate} />
    </div>
  )
}
