import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import { Breadcrumbs } from '../Layout'
import CheckForm from './CheckForm'
const RoomsSuitesImg = '/RoomsAndSuites/rooms_suites_banner_img.jpg'

interface RoomsSuitesBannerProps {
  onNavigate?: (page: string) => void
}

export default function RoomsSuitesBanner({ onNavigate }: RoomsSuitesBannerProps) {
  const { t } = useTranslation()
  const { fadeInDown, fadeInUp } = useAnimation()
  const breadcrumbPages = [{ name: t('rooms.title'), href: '#roomsAndSuites', current: true }]

  return (
    <div className="relative bg-slate-900">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <motion.img
          alt="Rooms & Suites Banner"
          src={RoomsSuitesImg}
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

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 lg:px-8 pt-64 pb-72 sm:pt-72 sm:pb-58 lg:pt-80 lg:pb-40 text-center">
        <div className="relative z-10 mb-6 sm:mb-8 lg:mb-12">
          <Breadcrumbs pages={breadcrumbPages} onNavigate={onNavigate} variant="dark" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6"
            variants={fadeInDown}
            initial="initial"
            animate="animate"
          >
            {t('rooms.title')}
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            {t('rooms.bannerDesc')}
          </motion.p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 translate-y-1/2 pb-12 sm:translate-y-1/3 sm:pt-36 lg:translate-y-1/3 lg:pt-34 px-4 sm:px-6 lg:px-8 z-30">
        <div className="mx-auto max-w-7xl">
          <CheckForm onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  )
}
