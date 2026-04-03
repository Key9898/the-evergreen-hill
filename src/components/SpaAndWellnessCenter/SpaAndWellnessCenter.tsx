import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import { Header } from '../Layout'
import { ScrollToTopButton } from '../Layout'
import { Footer } from '../Layout'
import SpaAndWellnessCenterBanner from './SpaAndWellnessCenterBanner'
import SpaAndWellnessManager from './SpaAndWellnessManager'
import SpaForm from './SpaForm'
import SpaCTA from './SpaCTA'
const SpaAndWellnessCenterImgOne = '/SpaAndWellnessCenter/spa_wellness_one.jpg'
const SpaAndWellnessCenterImgTwo = '/SpaAndWellnessCenter/spa_wellness_two.jpg'

const posts = [
  {
    id: 1,
    title: 'Our Spa Menu',
    description:
      'Indulge in treatments that utilize local herbs and traditional techniques for an authentic healing experience.',
    imageAlt: 'Spa and Wellness Center Image One',
    imageUrl: SpaAndWellnessCenterImgOne,
    category: { title: 'Spa & Wellness Center' },
    time: { time: 'Opening Hours: 09:00 AM to 09:00 PM' },
    offers: [
      'Traditional Shan Massage (60 min) - 60,000 MMK',
      'The Evergreen Aromatherapy (60 min) - 75,000 MMK',
      'Hot Stone Therapy (90 min) - 110,000 MMK',
      'Herbal Body Scrub & Wrap (75 min) - 95,000 MMK',
      'Detoxifying Mud Wrap (60 min) - 85,000 MMK',
      'Rejuvenating Signature Facial (60 min) - 80,000 MMK',
      'Deep Cleansing Facial (75 min) - 90,000 MMK',
      'The Kalaw Retreat (3 hours - includes a body scrub, Shan massage, and a mini facial) - 195,000 MMK',
    ],
  },
  {
    id: 2,
    title: 'Fitness Center',
    description:
      'Maintain your routine or start a new one in our state-of-the-art fitness center, equipped for all your cardio and strength training needs.',
    imageAlt: 'Spa and Wellness Center Image Two',
    imageUrl: SpaAndWellnessCenterImgTwo,
    category: { title: 'Spa & Wellness Center' },
    time: { time: 'Opening Hours: 06:00 AM to 10:00 PM' },
    offers: [
      'The Gym: Featuring treadmills, elliptical trainers, free weights, and strength machines.',
      'Yoga & Meditation: Join our complimentary morning yoga sessions or use the serene space for your own private meditation practice.',
      'Personal Training: Our certified trainers are available for personalized sessions. Please book in advance.',
    ],
    notices: [
      'Complimentary for all in-house guests.',
      'Day Pass for non-guests: 20,000 MMK per person.',
    ],
  },
]

interface SpaAndWellnessCenterProps {
  onNavigate?: (page: string) => void
}

export default function SpaAndWellnessCenter({ onNavigate }: SpaAndWellnessCenterProps) {
  const [openForm, setOpenForm] = useState(false)
  const { fadeInUp, staggerContainer } = useAnimation()

  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} activePage="experiences" />
      <div className="relative -mt-24 sm:-mt-28">
        <SpaAndWellnessCenterBanner onNavigate={onNavigate} />
      </div>

      <SpaAndWellnessManager />

      <div className="py-16 pt-0 pb-16 lg:py-16 lg:pt-0 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:max-w-none sm:gap-x-6 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
          >
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                className={`flex flex-col items-start justify-between ${
                  index % 2 === 0 ? 'lg:col-start-1 lg:col-span-6' : 'lg:col-start-7 lg:col-span-6'
                } rounded-md bg-white ring-1 ring-slate-200 shadow-sm p-4 sm:p-6`}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="relative w-full group overflow-hidden rounded-md shadow-lg">
                  <img
                    alt={post.imageAlt}
                    src={post.imageUrl}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="aspect-video w-full rounded-md shadow-lg bg-slate-100 object-cover sm:aspect-2/1 lg:aspect-3/2 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-md shadow-lg inset-ring inset-ring-slate-900/10" />
                </div>
                <div className="flex max-w-xl grow flex-col justify-between">
                  <div className="mt-8 flex items-center gap-x-4 text-base">
                    <span className="relative z-10 rounded-md bg-teal-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-teal-100">
                      {post.category.title}
                    </span>
                    {post.time?.time && <span className="text-slate-500">{post.time.time}</span>}
                  </div>
                  <div className="group relative grow">
                    <h3 className="mt-3 text-xl font-semibold text-teal-700">{post.title}</h3>
                    <p className="mt-5 text-lg/6 text-slate-700">{post.description}</p>
                  </div>

                  {Array.isArray(post.offers) && post.offers.length > 0 && (
                    <div className={`w-full ${post.id === 1 ? 'mt-6 lg:mb-6' : 'mt-6'}`}>
                      <ol className="list-decimal pl-4 space-y-2 text-base text-slate-700">
                        {post.offers.map((offer, idx) => (
                          <li key={idx} className="whitespace-normal">
                            {offer}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {'notices' in post && Array.isArray(post.notices) && post.notices.length > 0 && (
                    <div className="mt-4 w-full rounded-md bg-teal-50 p-4 ring-1 ring-slate-200">
                      <h4 className="text-base font-semibold text-teal-700">Notice</h4>
                      <ol className="mt-2 list-decimal pl-4 space-y-2 text-base text-slate-700">
                        {(post.notices as string[]).map((note, idx) => (
                          <li key={idx}>{note}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>

      <SpaCTA onOpenForm={() => setOpenForm(true)} />

      <SpaForm
        open={openForm}
        onClose={() => setOpenForm(false)}
        onSubmit={() => setOpenForm(false)}
      />
      <ScrollToTopButton />
      <Footer onNavigate={onNavigate} />
    </div>
  )
}
