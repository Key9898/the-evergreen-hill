import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'

const GeneralManagerPhoto = '/Team/general_manager.jpg'

export default function GeneralManager() {
  const { fadeInLeft, fadeInRight, staggerContainer } = useAnimation()
  return (
    <section className="isolate overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 pt-14 pb-6 lg:py-16 lg:pt-16 lg:pb-4">
        <div className="absolute top-0 left-1/2 -z-10 h-200 w-360 -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,var(--color-teal-100),white)] opacity-20 lg:left-36" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-white sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center lg:shadow-xl lg:ring-1 lg:ring-teal-50 lg:shadow-teal-600/10" />
        <motion.figure
          className="grid grid-cols-1 items-center gap-x-6 gap-y-4 lg:gap-x-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.div
            className="relative col-span-2 lg:col-start-1 lg:row-start-2"
            variants={fadeInLeft}
          >
            <blockquote className="text-slate-900">
              <h2 className="text-4xl sm:text-4xl lg:text-5xl font-semibold text-teal-600">
                Your Highland Oasis
              </h2>
              <p className="mt-4 text-lg/8 text-slate-700">
                At The Evergreen Hill, we believe true luxury is the luxury of peace. We designed
                our swimming pool not just as a place to swim, but as a tranquil sanctuary where you
                can truly unwind, soak in the majestic scenery, and let the quiet beauty of Kalaw
                restore your spirit.
              </p>
            </blockquote>
          </motion.div>
          <motion.div className="col-end-1 w-16 lg:row-span-4 lg:w-72" variants={fadeInRight}>
            <img
              alt="General Manager Nang Aye Aye Lwin"
              src={GeneralManagerPhoto}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="rounded-md bg-indigo-50"
            />
          </motion.div>
          <figcaption className="text-base lg:col-start-1 lg:row-start-3">
            <div className="font-semibold text-teal-700">Nang Aye Aye Lwin</div>
            <div className="mt-1">
              <span className="inline-block rounded-md bg-slate-100 px-2 py-1 text-slate-700">
                General Manager
              </span>
            </div>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
