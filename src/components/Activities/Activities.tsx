import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import { useTranslation } from 'react-i18next'
import { Header } from '../Layout'
import ScrollToTopButton from '../Layout/ScrollToTopButton'
import Footer from '../Layout/Footer'
import ActivitiesBanner from './ActivitiesBanner'
import LeadConcierge from './LeadConcierge'
import ActivitiesForm from './ActivitiesForm'
const MountainAndVillageTreks = '/Activities/mountain_village_treks.jpg'
const MouintainCycling = '/Activities/mountain_cycling.jpg'
const LocalLifeTour = '/Activities/local_life_tour.jpg'
const Adventure = '/Activities/adventure.jpg'

interface ActivitiesProps {
  onNavigate?: (page: string) => void
}

export default function Activities({ onNavigate }: ActivitiesProps) {
  const { t } = useTranslation()
  const { fadeInUp, staggerContainer } = useAnimation()
  const [openForm, setOpenForm] = useState(false)

  const posts = [
    {
      id: 1,
      title: t('activities.treks.title'),
      description: t('activities.treks.description'),
      imageAlt: 'Mountain and Village Treks',
      imageUrl: MountainAndVillageTreks,
      category: { title: t('activities.title') },
      time: { time: t('activities.departsDaily') },
      packages: [
        {
          title: t('activities.treks.packages.halfDay'),
          price: 'Starting from 45,000 MMK per person',
        },
        {
          title: t('activities.treks.packages.fullDay'),
          price: 'Starting from 95,000 MMK per person (includes lunch)',
        },
        {
          title: t('activities.treks.packages.twoDay'),
          price: 'Starting from 220,000 MMK per person (includes meals & overnight stay)',
        },
        {
          title: t('activities.treks.packages.pineForest'),
          price: 'Starting from 45,000 MMK per person',
        },
        {
          title: t('activities.treks.packages.sunsetHill'),
          price: 'Starting from 60,000 MMK per person',
        },
      ],
    },
    {
      id: 2,
      title: t('activities.cycling.title'),
      description: t('activities.cycling.description'),
      imageAlt: 'Mountain Cycling',
      imageUrl: MouintainCycling,
      category: { title: t('activities.title') },
      time: { time: t('activities.departsDaily') },
      packages: [
        {
          title: t('activities.cycling.packages.townDiscovery'),
          price: 'Starting from K 35,000 per person (includes bike rental)',
        },
        {
          title: t('activities.cycling.packages.countrysideLoop'),
          price: 'Starting from K 50,000 per person (includes bike rental)',
        },
        {
          title: t('activities.cycling.packages.reservoirViewpoint'),
          price: 'Starting from K 60,000 per person (includes bike rental)',
        },
        {
          title: t('activities.cycling.packages.caveChallenge'),
          price: 'Starting from K 120,000 per person (includes bike rental)',
        },
        {
          title: t('activities.cycling.packages.selfGuided'),
          price: 'Starting from K 100,000 per person (includes bike rental)',
        },
      ],
    },
    {
      id: 3,
      title: t('activities.cultural.title'),
      description: t('activities.cultural.description'),
      imageAlt: 'Local Life Tour',
      imageUrl: LocalLifeTour,
      category: { title: t('activities.title') },
      time: { time: t('activities.departsDaily') },
      packages: [
        {
          title: t('activities.cultural.packages.marketTour'),
          price: 'Starting from K 40,000 per person (includes transportation)',
        },
        {
          title: t('activities.cultural.packages.cookingClass'),
          price: 'Starting from K 75,000 per person (includes all ingredients and lunch)',
        },
        {
          title: t('activities.cultural.packages.elephantCamp'),
          price: 'Starting from K 85,000 per person (includes entrance fee & transportation)',
        },
        {
          title: t('activities.cultural.packages.heritageWalk'),
          price: 'Starting from K 50,000 per person',
        },
        {
          title: t('activities.cultural.packages.teaPlantation'),
          price: 'Starting from K 80,000 per person (includes transportation)',
        },
      ],
    },
    {
      id: 4,
      title: t('activities.plan.title'),
      description: t('activities.plan.description'),
      imageAlt: 'Adventure',
      imageUrl: Adventure,
      category: { title: t('activities.title') },
      time: { time: t('activities.advanceBooking') },
      notices: [
        t('activities.plan.notices.howToBook'),
        t('activities.plan.notices.whatToBring'),
        t('activities.plan.notices.privateTours'),
        t('activities.plan.notices.cancellations'),
        t('activities.plan.notices.healthFitness'),
        t('activities.plan.notices.pricing'),
        t('activities.plan.notices.weather'),
      ],
      button: t('activities.planAdventure'),
    },
  ]

  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} activePage="experiences" />
      <div className="relative -mt-40 sm:-mt-44 lg:-mt-48">
        <ActivitiesBanner onNavigate={onNavigate} />
      </div>

      <LeadConcierge />

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
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`flex flex-col items-start justify-between ${
                  index % 2 === 0 ? 'lg:col-start-1 lg:col-span-6' : 'lg:col-start-7 lg:col-span-6'
                } rounded-md bg-white ring-1 ring-slate-200 shadow-sm p-4 sm:p-6`}
              >
                <div className="relative w-full group overflow-hidden rounded-md">
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
                    <p className="mt-5 text-base text-slate-700">{post.description}</p>
                  </div>

                  {Array.isArray(post.packages) && post.packages.length > 0 && (
                    <div className={`w-full ${post.id === 3 ? 'mt-6 lg:mb-49' : 'mt-6'}`}>
                      <ol className="list-decimal pl-4 space-y-3 text-base text-slate-700">
                        {post.packages.map((offer, idx) => (
                          <li key={idx} className="whitespace-normal">
                            <span>{offer.title}</span>
                            {offer.price && (
                              <div className="mt-1 text-slate-600">
                                <span className="text-base font-medium text-teal-700">
                                  {t('activities.price')}
                                </span>{' '}
                                {offer.price}
                              </div>
                            )}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {post.button && (
                    <div className="mt-6">
                      <motion.button
                        type="button"
                        onClick={() => setOpenForm(true)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center rounded-md bg-teal-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-teal-600"
                      >
                        {post.button}
                      </motion.button>
                    </div>
                  )}

                  {Array.isArray(post.notices) && post.notices.length > 0 && (
                    <div className="mt-4 w-full rounded-md bg-teal-50 p-4 ring-1 ring-slate-200">
                      <h4 className="text-sm font-semibold text-slate-900">
                        {t('activities.notices')}
                      </h4>
                      <ol className="mt-2 list-decimal pl-4 space-y-3 text-sm text-slate-700">
                        {post.notices.map((note, idx) => (
                          <li
                            key={idx}
                            className={post.id === 4 && idx === 3 ? 'text-red-400' : undefined}
                          >
                            {note}
                          </li>
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

      <ActivitiesForm
        open={openForm}
        onClose={() => setOpenForm(false)}
        onSubmit={() => setOpenForm(false)}
      />

      <ScrollToTopButton />
      <Footer onNavigate={onNavigate} />
    </div>
  )
}
