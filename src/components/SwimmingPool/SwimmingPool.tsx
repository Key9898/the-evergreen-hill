import { TbTemperature, TbBeach, TbMountain, TbMapPin } from 'react-icons/tb'
import { MdOutlineLocalBar } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import { Header } from '../Layout'
import ScrollToTopButton from '../Layout/ScrollToTopButton'
import Footer from '../Layout/Footer'
import SwimmingPoolBanner from './SwimmingPoolBanner'
import GeneralManager from './GeneralManager'
const SwimmingPoolImgOne = '/SwimmingPool/swimming_pool_one.jpg'
const SwimmingPoolImgTwo = '/SwimmingPool/swimming_pool_two.jpg'
const SwimmingPoolImgThree = '/SwimmingPool/swimming_pool_three.jpg'

const posts = [
  {
    id: 1,
    title: 'Poolside Serenity',
    description:
      'Relax and unwind by our temperature-controlled swimming pool. Order a refreshing drink and soak in the breathtaking, uninterrupted views of the surrounding mountains.',
    imageAlt: 'Swimming Pool Image One, Two, and Three',
    imageUrls: [SwimmingPoolImgOne, SwimmingPoolImgTwo, SwimmingPoolImgThree],
    category: { title: 'Swimming Pool' },
    time: { time: 'Daily: 7:00 AM - 9:00 PM' },
    offers: [
      {
        icon: TbTemperature,
        title: 'Temperature-Controlled',
        description: 'Enjoy a comfortable swim any time of day, in any season.',
      },
      {
        icon: TbBeach,
        title: 'Poolside Loungers',
        description: 'Relax and soak up the sun on our comfortable, cushioned sun loungers.',
      },
      {
        icon: MdOutlineLocalBar,
        title: 'Poolside Service',
        description:
          'Order refreshing beverages and light snacks directly to your lounger from our bar.',
      },
      {
        icon: TbMountain,
        title: 'Uninterrupted Mountain Views',
        description:
          'Our pool is perfectly positioned to offer stunning, panoramic views of the Shan highlands.',
      },
      { icon: TbMapPin, title: 'Location', description: 'Ground Floor, Garden Wing' },
    ],
    notice: ['For in-house guests only. Please note there is no lifeguard on duty.'],
  },
]

interface SpaAndWellnessCenterProps {
  onNavigate?: (page: string) => void
}

export default function SpaAndWellnessCenter({ onNavigate }: SpaAndWellnessCenterProps) {
  const { fadeInUp, scaleIn, staggerContainer } = useAnimation()
  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} activePage="experiences" />
      <div className="relative -mt-24 sm:-mt-28">
        <SwimmingPoolBanner onNavigate={onNavigate} />
      </div>

      {/* Spa&Wellness Manager Section */}
      <GeneralManager />

      <div className="py-16 pt-0 pb-16 lg:py-16 lg:pt-0 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:max-w-none sm:gap-x-6 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
          >
            {posts.map((post) => (
              <motion.article
                variants={fadeInUp}
                key={post.id}
                className="flex flex-col items-start justify-between lg:col-span-12 rounded-md bg-white ring-1 ring-slate-200 shadow-sm p-4 sm:p-6"
              >
                {/* images grid: 3 columns */}
                <div className="relative w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {post.imageUrls?.map((src, idx) => (
                      <motion.div
                        key={idx}
                        className={`relative ${idx === post.imageUrls.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''} group overflow-hidden rounded-md shadow-lg`}
                        variants={scaleIn}
                      >
                        <img
                          alt={post.imageAlt}
                          src={src}
                          loading="lazy"
                          decoding="async"
                          fetchPriority="low"
                          className="aspect-[4/3] w-full rounded-md shadow-lg bg-slate-100 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 rounded-md shadow-lg inset-ring inset-ring-slate-900/10" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Content wrapper: split into 2 columns on Desktop */}
                <div className="w-full grow">
                  <div className="mt-8 flex items-center gap-x-4 text-base">
                    <span className="relative z-10 rounded-md bg-teal-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-teal-100">
                      {post.category.title}
                    </span>
                    {post.time?.time && <span className="text-slate-500">{post.time.time}</span>}
                  </div>

                  <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-8">
                    {/* Left: title + description + notice */}
                    <div className="lg:col-span-7">
                      <div className="group relative">
                        <h3 className="text-xl font-semibold text-teal-700">{post.title}</h3>
                        <p className="mt-5 text-lg/6 text-slate-700">{post.description}</p>
                        {Array.isArray(post.notice) && post.notice.length > 0 && (
                          <div className="mt-4 w-full rounded-md bg-teal-50 p-4 ring-1 ring-slate-200">
                            <h4 className="text-base font-semibold text-slate-900">Notice</h4>
                            <ul className="mt-2 list-none text-base text-slate-700">
                              {post.notice.map((note, idx) => (
                                <li key={idx} className="whitespace-normal">
                                  {note}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right: Offers */}
                    <div className="lg:col-span-5">
                      {Array.isArray(post.offers) && post.offers.length > 0 && (
                        <div className="w-full">
                          <ul className="list-none space-y-3 text-base text-slate-700">
                            {post.offers.map((offer, idx) => {
                              const Icon = offer.icon
                              return (
                                <li key={idx} className="whitespace-normal">
                                  <div className="flex items-start gap-3">
                                    <Icon className="mt-0.5 h-5 w-5 text-teal-600" />
                                    <div>
                                      <p className="text-base font-medium text-teal-600">
                                        {offer.title}
                                      </p>
                                      <p className="text-base text-slate-700">
                                        {offer.description}
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
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
