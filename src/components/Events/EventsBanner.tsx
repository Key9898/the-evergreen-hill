import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import { Breadcrumbs } from '../Layout'
const EventsImg = '/Events/events_banner_img.jpg'

interface EventsBannerProps {
  onNavigate?: (page: string) => void
}

export default function EventsBanner({ onNavigate }: EventsBannerProps) {
  const { fadeInDown, fadeInUp, staggerContainer } = useAnimation()
  const breadcrumbPages = [{ name: 'Events', href: '#events', current: true }]

  return (
    <div className="relative bg-slate-900">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <motion.img
          alt="Events Banner"
          src={EventsImg}
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
            Bring Your Vision to Life
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Whether it's a dream wedding, a focused corporate retreat, or a joyful celebration, our
            dedicated team specializes in turning your vision into a flawlessly executed reality.
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
