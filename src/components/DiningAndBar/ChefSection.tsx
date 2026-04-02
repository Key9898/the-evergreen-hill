import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
const HeadChefPhoto = '/Team/head_chef.jpg'

export default function ChefSection() {
  const { fadeInLeft, fadeInRight, fadeInUp } = useAnimation()

  return (
    <section className="isolate overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 pt-14 pb-6 lg:py-16 lg:pt-16 lg:pb-4">
        <div className="absolute top-0 left-1/2 -z-10 h-200 w-360 -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,var(--color-teal-100),white)] opacity-20 lg:left-36" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-white sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center lg:shadow-xl lg:ring-1 lg:ring-teal-50 lg:shadow-teal-600/10" />
        <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-4 lg:gap-x-10">
          <motion.div
            className="relative col-span-2 lg:col-start-1 lg:row-start-2"
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
          >
            <blockquote className="text-slate-900">
              <h2 className="text-4xl sm:text-4xl lg:text-5xl font-semibold text-teal-600">
                From Local Farms to Your Table
              </h2>
              <p className="mt-4 text-lg/8 text-slate-700">
                Led by our renowned Head Chef, U Sai Myo, our culinary philosophy is simple:
                celebrate the rich bounty of the Shan region. We partner with local farmers to
                source the freshest seasonal ingredients, ensuring every dish is a true expression
                of Kalaw's vibrant flavors.
              </p>
            </blockquote>
          </motion.div>
          <motion.div
            className="col-end-1 w-16 lg:row-span-4 lg:w-72"
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
          >
            <img
              alt="Head Chef U Sai Myo"
              src={HeadChefPhoto}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="rounded-md bg-indigo-50"
            />
          </motion.div>
          <motion.figcaption
            className="text-base lg:col-start-1 lg:row-start-3"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="font-semibold text-teal-700">U Sai Myo</div>
            <div className="mt-1">
              <span className="inline-block rounded-md bg-slate-100 px-2 py-1 text-slate-700">
                Head Chef
              </span>
            </div>
          </motion.figcaption>
        </figure>
      </div>
    </section>
  )
}
