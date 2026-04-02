import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'

interface TabsProps {
  activeTab: string
  onTabChange: (tabName: string) => void
}

export default function DiningAndBarTabs({ activeTab, onTabChange }: TabsProps) {
  const { t } = useTranslation()
  const mobileScrollRef = useRef<HTMLElement>(null)
  const tabletScrollRef = useRef<HTMLElement>(null)
  const { fadeInUp } = useAnimation()

  const tabs = [
    { name: t('dining.allMenues'), key: 'All Menues', href: '#', current: false },
    { name: t('dining.breakfast'), key: 'Breakfast', href: '#', current: false },
    { name: t('dining.allDayDining'), key: 'All-Day Dining', href: '#', current: false },
    { name: t('dining.dinner'), key: 'Dinner', href: '#', current: false },
    { name: t('dining.barLounge'), key: 'Bar & Lounge', href: '#', current: false },
  ]

  const handleTabClick = (tabName: string) => {
    onTabChange(tabName)
  }

  const scrollByStep = (el: HTMLElement | null, direction: 'left' | 'right') => {
    if (!el) return
    const step = Math.max(120, Math.floor(el.clientWidth * 0.6))
    const delta = direction === 'left' ? -step : step
    if (typeof el.scrollBy === 'function') {
      el.scrollBy({ left: delta, behavior: 'smooth' })
    } else {
      el.scrollLeft += delta
    }
  }

  const scrollLeftMobile = () => scrollByStep(mobileScrollRef.current, 'left')
  const scrollRightMobile = () => scrollByStep(mobileScrollRef.current, 'right')
  const scrollLeftTablet = () => scrollByStep(tabletScrollRef.current, 'left')
  const scrollRightTablet = () => scrollByStep(tabletScrollRef.current, 'right')

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <motion.div
          className="py-6 border-b border-slate-900/10"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="md:hidden">
            <div className="relative flex items-center">
              <motion.button
                type="button"
                onClick={scrollLeftMobile}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-shrink-0 p-1 mb-2 mr-2 rounded-full bg-white shadow-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeftIcon className="h-4 w-4 text-slate-600" />
              </motion.button>

              <nav
                ref={mobileScrollRef}
                className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth pb-2 flex-1 pr-2"
              >
                {tabs.map((tab) => (
                  <motion.button
                    type="button"
                    key={tab.key}
                    onClick={() => handleTabClick(tab.key)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-shrink-0 whitespace-nowrap text-sm font-medium transition-colors ${
                      activeTab === tab.key
                        ? 'border-teal-500 text-teal-600'
                        : 'border-transparent text-slate-600 hover:text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {tab.name}
                  </motion.button>
                ))}
              </nav>

              <motion.button
                type="button"
                onClick={scrollRightMobile}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-shrink-0 p-1 mb-2 ml-4 rounded-full bg-white shadow-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRightIcon className="h-4 w-4 text-slate-600" />
              </motion.button>
            </div>
          </div>

          <div className="hidden md:block lg:hidden">
            <div className="relative flex items-center">
              <motion.button
                type="button"
                onClick={scrollLeftTablet}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-shrink-0 p-1 mb-2 mr-2 rounded-full bg-white shadow-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeftIcon className="h-6 w-6 text-slate-600" />
              </motion.button>

              <nav
                ref={tabletScrollRef}
                className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth pb-2 flex-1 pr-2"
              >
                {tabs.map((tab) => (
                  <motion.button
                    type="button"
                    key={tab.key}
                    onClick={() => handleTabClick(tab.key)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-shrink-0 whitespace-nowrap text-sm font-medium transition-colors ${
                      activeTab === tab.key
                        ? 'border-teal-500 text-teal-600'
                        : 'border-transparent text-slate-600 hover:text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {tab.name}
                  </motion.button>
                ))}
              </nav>

              <motion.button
                type="button"
                onClick={scrollRightTablet}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-shrink-0 p-1 mb-2 ml-4 rounded-full bg-white shadow-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRightIcon className="h-6 w-6 text-slate-600" />
              </motion.button>
            </div>
          </div>

          <div className="hidden lg:block">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <motion.button
                  type="button"
                  key={tab.key}
                  onClick={() => handleTabClick(tab.key)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.key
                      ? 'border-teal-500 text-teal-600'
                      : 'border-transparent text-slate-600 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {tab.name}
                </motion.button>
              ))}
            </nav>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
