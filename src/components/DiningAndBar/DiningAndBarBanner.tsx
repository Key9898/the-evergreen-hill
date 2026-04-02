import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import Breadcrumbs from '../Layout/Breadcrumbs'
const DiningBarImg = '/DiningAndBar/dining_bar_banner_img.jpg'

interface DiningBarBannerProps {
  onNavigate?: (page: string) => void
}

export default function DiningBarBanner({ onNavigate }: DiningBarBannerProps) {
  const { t } = useTranslation()
  const { fadeInDown, fadeInUp } = useAnimation()
  const breadcrumbPages = [
    { name: t('dining.breadcrumbExperiences'), href: '#experiences', current: false },
    { name: t('dining.title'), href: '#DiningAndBar', current: true },
  ]

  return (
    <div className="relative bg-slate-900">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <motion.img
          alt="Dining & Bar Banner"
          src={DiningBarImg}
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

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 sm:px-6 pt-56 pb-20 sm:pt-64 sm:pb-32 lg:pt-72 lg:pb-40 text-center lg:px-8">
        <div className="relative z-10 mt-12 mb-6 sm:mb-8 lg:mb-12">
          <Breadcrumbs pages={breadcrumbPages} onNavigate={onNavigate} variant="dark" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6"
            variants={fadeInDown}
            initial="initial"
            animate="animate"
          >
            {t('dining.bannerTitle')}
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            {t('dining.bannerDesc')}
          </motion.p>
        </div>
      </div>
    </div>
  )
}
