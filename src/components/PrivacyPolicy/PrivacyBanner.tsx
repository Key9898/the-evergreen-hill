import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import Breadcrumbs from '../Layout/Breadcrumbs'
const PrivacyImg = '/PrivacyPolicy/privacy_policy_img.jpg'

interface PrivacyBannerProps {
  onNavigate?: (page: string) => void
}

export default function PrivacyBanner({ onNavigate }: PrivacyBannerProps) {
  const { fadeInDown, staggerContainer } = useAnimation()
  const breadcrumbPages = [{ name: 'Privacy Policy', href: '#privacy', current: true }]

  return (
    <div className="bg-white">
      <div className="relative bg-slate-900">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <motion.img
            alt="Privacy Policy Banner"
            src={PrivacyImg}
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

        <motion.div
          className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
        >
          <Breadcrumbs pages={breadcrumbPages} onNavigate={onNavigate} variant="dark" />
          <motion.h1
            className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            variants={fadeInDown}
          >
            Privacy Policy
          </motion.h1>
        </motion.div>
      </div>
    </div>
  )
}
