import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import { LuPlane } from 'react-icons/lu'
import { TbCar, TbTrain } from 'react-icons/tb'

const posts = [
  {
    id: 1,
    title: 'From Heho Airport (HEH)',
    description:
      'The nearest airport is Heho Airport (HEH), a scenic 60-minute drive from the hotel. We are pleased to arrange a private airport transfer for a seamless arrival. Please contact our concierge to book in advance.',
    category: { title: 'By Plane' },
    icon: LuPlane,
  },
  {
    id: 2,
    title: 'By Private Car or Bus',
    description:
      'For those traveling by private car or bus, Kalaw is well-connected to major cities. The hotel is located just a 5-minute drive from the main bus station and offers complimentary on-site parking.',
    category: { title: 'By Car' },
    icon: TbCar,
  },
  {
    id: 3,
    title: 'The Scenic Train Journey',
    description:
      'For a truly unique experience, consider the scenic train journey to Kalaw. The historic Kalaw Railway Station is a mere 5-minute taxi ride from our hotel.',
    category: { title: 'By Train' },
    icon: TbTrain,
  },
]

interface GettingHereProps {
  onNavigate?: (page: string) => void
}

export default function GettingHere({ onNavigate }: GettingHereProps) {
  void onNavigate
  const { fadeInDown, fadeInUp, staggerContainer } = useAnimation()

  return (
    <div className="bg-white py-16 pt-0 sm:py-16 sm:pt-0 lg:py-16 lg:pt-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={fadeInDown}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-teal-600">
            Your Journey to Kalaw
          </h2>
          <p className="mt-6 text-lg/8 text-slate-700">
            Arriving at The Evergreen Hill is the beginning of your escape. We've outlined the best
            ways to reach our tranquil sanctuary in the Shan Highlands.
          </p>
        </motion.div>
        <motion.div
          className="mx-auto mt-6 grid max-w-2xl md:max-w-3xl grid-cols-1 gap-x-8 gap-y-6 border-t border-slate-200 pt-6 sm:mt-6 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
        >
          {posts.map((post) => {
            const Icon = post.icon
            return (
              <motion.article
                key={post.id}
                variants={fadeInUp}
                className="flex flex-col items-start justify-between md:max-w-none lg:max-w-xl"
              >
                <div className="flex items-center gap-x-2 text-base">
                  <Icon
                    className="size-8 text-slate-500"
                    aria-label={post.category.title}
                    title={post.category.title}
                  />
                  <span className="relative z-10 rounded-md bg-teal-50 hover:bg-teal-100 px-3 py-1.5 font-medium text-slate-600">
                    {post.category.title}
                  </span>
                </div>
                <div className="group relative grow">
                  <h3 className="mt-3 text-xl font-semibold text-teal-700 group-hover:text-slate-600">
                    <span className="absolute inset-0" />
                    {post.title}
                  </h3>
                  <p className="mt-5 text-lg/6 text-slate-700">{post.description}</p>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
