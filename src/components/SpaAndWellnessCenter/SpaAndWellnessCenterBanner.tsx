import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import { Breadcrumbs } from '../Layout'
const SpaAndWellnessCenterImg = '/SpaAndWellnessCenter/spa_wellness_banner_img.jpg'

interface SpaAndWellnessCenterBannerProps {
  onNavigate?: (page: string) => void
}

export default function SpaAndWellnessCenterBanner({
  onNavigate,
}: SpaAndWellnessCenterBannerProps) {
  const { fadeInDown, fadeInUp, staggerContainer } = useAnimation()
  const breadcrumbPages = [
    { name: 'Experiences', href: '#experiences', current: false },
    { name: 'Spa & Wellness Center', href: '#spaAndWellnessCenter', current: true },
  ]

  return (
    <div className="relative bg-slate-900">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <motion.img
          alt="Spa & Wellness Center Banner"
          src={SpaAndWellnessCenterImg}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="size-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-slate-900 opacity-50" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 sm:px-6 pt-32 pb-20 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40 text-center lg:px-8">
        <div className="relative z-10 mt-12 mb-6 sm:mb-8 lg:mb-12">
          <Breadcrumbs pages={breadcrumbPages} onNavigate={onNavigate} variant="dark" />
        </div>

        <motion.div
          className="relative z-10 max-w-4xl"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6"
            variants={fadeInDown}
          >
            A Sanctuary for Body & Mind
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Step into a world of tranquility and revitalization. Our wellness sanctuary is dedicated
            to soothing your body, calming your mind, and renewing your spirit amidst the serene
            beauty of Kalaw.
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
