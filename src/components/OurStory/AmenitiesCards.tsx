import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import {
  ClipboardDocumentListIcon,
  SparklesIcon,
  LifebuoyIcon,
  FlagIcon,
} from '@heroicons/react/24/outline'
const RestaurantCardImg = '/OurStory/story_restaurant_card_img.jpg'
const SpaAndWellnessCardImg = '/OurStory/story_wellness_card_img.jpg'
const SwimmingPoolCardImg = '/OurStory/story_swimming_pool_card_img.jpg'
const ActivitiesCardImg = '/OurStory/story_activities_card_img.jpg'

export default function AmenitiesCards({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const { fadeInDown, fadeInUp, staggerContainer } = useAnimation()

  const cards = [
    {
      id: 1,
      title: 'A Taste of Shan Highlands',
      description:
        'Savor authentic local flavors and international cuisine, all prepared with fresh ingredients and served with panoramic views of the Kalaw hills.',
      imageAlt: 'Restaurant Card Image',
      imageUrl: RestaurantCardImg,
      icon: 'restaurant',
      category: { title: 'Restaurant' },
    },
    {
      id: 2,
      title: 'For Body & Mind',
      description:
        'A complete wellness experience awaits. Soothe your senses in our serene spa, or invigorate your body in our state-of-the-art fitness center.',
      imageAlt: 'Spa & Wellness Card Image',
      imageUrl: SpaAndWellnessCardImg,
      icon: 'spaAndWellness',
      category: { title: 'Spa & Wellness' },
    },
    {
      id: 3,
      title: 'Poolside Serenity',
      description:
        'Take a refreshing dip in our temperature-controlled pool, or simply relax on a sun lounger while soaking in the breathtaking mountain vistas.',
      imageAlt: 'Swimming Pool Card Image',
      imageUrl: SwimmingPoolCardImg,
      icon: 'swimmingPool',
      category: { title: 'Swimming Pool' },
    },
    {
      id: 4,
      title: 'Adventures in Kalaw',
      description:
        'From guided treks through pine-covered hills to local market tours, let us be your guide to discovering the natural beauty of Kalaw.',
      imageAlt: 'Activities Card Image',
      imageUrl: ActivitiesCardImg,
      icon: 'activity',
      category: { title: 'Activities' },
    },
  ]

  function CategoryIcon({ name }: { name?: string }) {
    const key = (name || '').toLowerCase()
    if (key.includes('restaurant'))
      return <ClipboardDocumentListIcon aria-hidden="true" className="size-8 text-teal-400" />
    if (key.includes('spaAndWellness') || key.includes('wellness'))
      return <SparklesIcon aria-hidden="true" className="size-8 text-teal-400" />
    if (key.includes('swimmingPool'))
      return <LifebuoyIcon aria-hidden="true" className="size-8 text-teal-400" />
    if (key.includes('activity'))
      return <FlagIcon aria-hidden="true" className="size-8 text-teal-400" />
    return <ClipboardDocumentListIcon aria-hidden="true" className="size-8 text-teal-400" />
  }

  const pageById: Record<number, string> = {
    1: 'DiningAndBar',
    2: 'spaAndWellnessCenter',
    3: 'swimmingPool',
    4: 'activities',
  }

  return (
    <section className="mt-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          variants={fadeInDown}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-teal-600">
            The Evergreen Hill Experience
          </h2>
          <p className="mt-3 text-lg/8 text-slate-700">
            Beyond a place to stay, we offer a sanctuary for creating memories. Indulge your senses
            with our curated dining, wellness, and adventure offerings, each designed to make your
            time in Kalaw unforgettable.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 mb-16 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 items-stretch"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
        >
          {cards.map((post) => (
            <motion.article
              key={post.id}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative rounded-md bg-slate-50 shadow-lg ring-1 ring-slate-900/10 overflow-hidden"
            >
              <div className="absolute top-4 right-5 text-3xl font-semibold text-slate-200 select-none">
                {String(post.id).padStart(2, '0')}
              </div>
              <div className="flex h-full flex-col rounded-md shadow-lg group overflow-hidden bg-white">
                <div className="aspect-[16/9]">
                  <img
                    src={post.imageUrl}
                    alt={post.imageAlt}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl font-semibold text-teal-700">{post.title}</h3>
                    <span className="inline-flex rounded-md bg-teal-50 px-1 py-1 items-center">
                      <CategoryIcon name={post.icon || post.category?.title} />
                    </span>
                    <span className="rounded-md bg-teal-50 hover:bg-teal-100 px-3 py-1.5 font-medium text-slate-600">
                      {post.category.title}
                    </span>
                  </div>

                  <p className="text-lg/8 text-slate-700 flex-1 mb-4">{post.description}</p>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-auto inline-flex items-left justify-left text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                    onClick={() => onNavigate?.(pageById[post.id])}
                  >
                    Explore All Experiences{' '}
                    <span aria-hidden="true" className="ml-1">
                      →
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
