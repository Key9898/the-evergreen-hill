import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useAnimation } from '../../hooks/useAnimation'
import { galleryCategories } from '../../data/galleryData'
import type { GalleryItem } from '../../data/galleryData'

interface TabsProps {
  activeTab: string
  onTabChange: (tabName: string) => void
  categoryCounts: GalleryItem[]
}

interface ScrollableTabsProps {
  activeTab: string
  onTabClick: (tabName: string) => void
  scrollRef: React.RefObject<HTMLElement>
  iconSize: 'small' | 'large'
  categoryCounts: GalleryItem[]
}

function getCategoryKey(category: string): string {
  const keyMap: Record<string, string> = {
    'All Photos': 'all',
    'The Hotel & Scenery': 'hotel',
    'Rooms & Suites': 'rooms',
    'Dining & Bar': 'dining',
    'Spa & Wellness Center': 'spa',
    Activities: 'activities',
  }
  return keyMap[category] || 'all'
}

function getCategoryCount(category: string, items: GalleryItem[]): number {
  if (category === 'All Photos') {
    return items.length
  }
  return items.filter((item) => item.category === category).length
}

function ScrollableTabs({
  activeTab,
  onTabClick,
  scrollRef,
  iconSize,
  categoryCounts,
}: ScrollableTabsProps) {
  const { t } = useTranslation()

  const scrollByStep = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const el = scrollRef.current
    const step = Math.max(120, Math.floor(el.clientWidth * 0.6))
    const delta = direction === 'left' ? -step : step
    if (typeof el.scrollBy === 'function') {
      el.scrollBy({ left: delta, behavior: 'smooth' })
    } else {
      el.scrollLeft += delta
    }
  }

  const iconClassName = iconSize === 'small' ? 'h-4 w-4' : 'h-6 w-6'

  return (
    <div className="relative flex items-center">
      <motion.button
        type="button"
        onClick={() => scrollByStep('left')}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex-shrink-0 p-1 mb-2 mr-2 rounded-full bg-white shadow-lg border border-slate-200 hover:bg-slate-50 transition-colors"
        aria-label="Scroll left"
      >
        <ChevronLeftIcon className={`${iconClassName} text-slate-600`} />
      </motion.button>

      <nav
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth pb-2 flex-1 pr-2"
      >
        {galleryCategories.map((category) => {
          const count = getCategoryCount(category, categoryCounts)
          return (
            <motion.button
              type="button"
              key={category}
              onClick={() => onTabClick(category)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex-shrink-0 whitespace-nowrap text-sm font-medium transition-colors ${
                activeTab === category
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-slate-600 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              {t(`gallery.categories.${getCategoryKey(category)}`)}{' '}
              <span className="text-slate-400">({count})</span>
            </motion.button>
          )
        })}
      </nav>

      <motion.button
        type="button"
        onClick={() => scrollByStep('right')}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex-shrink-0 p-1 mb-2 ml-4 rounded-full bg-white shadow-lg border border-slate-200 hover:bg-slate-50 transition-colors"
        aria-label="Scroll right"
      >
        <ChevronRightIcon className={`${iconClassName} text-slate-600`} />
      </motion.button>
    </div>
  )
}

export default function GalleryTabs({ activeTab, onTabChange, categoryCounts }: TabsProps) {
  const mobileScrollRef = useRef<HTMLElement>(null)
  const tabletScrollRef = useRef<HTMLElement>(null)
  const { t } = useTranslation()
  const { fadeInUp } = useAnimation()

  const handleTabClick = (tabName: string) => {
    onTabChange(tabName)
  }

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
            <ScrollableTabs
              activeTab={activeTab}
              onTabClick={handleTabClick}
              scrollRef={mobileScrollRef}
              iconSize="small"
              categoryCounts={categoryCounts}
            />
          </div>

          <div className="hidden md:block lg:hidden">
            <ScrollableTabs
              activeTab={activeTab}
              onTabClick={handleTabClick}
              scrollRef={tabletScrollRef}
              iconSize="large"
              categoryCounts={categoryCounts}
            />
          </div>

          <div className="hidden lg:block">
            <nav className="flex space-x-8">
              {galleryCategories.map((category) => {
                const count = getCategoryCount(category, categoryCounts)
                return (
                  <motion.button
                    type="button"
                    key={category}
                    onClick={() => handleTabClick(category)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === category
                        ? 'border-teal-500 text-teal-600'
                        : 'border-transparent text-slate-600 hover:text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {t(`gallery.categories.${getCategoryKey(category)}`)}{' '}
                    <span className="text-slate-400">({count})</span>
                  </motion.button>
                )
              })}
            </nav>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
