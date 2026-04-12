import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useAnimation } from '../../hooks/useAnimation'
import { Header } from '../Layout'
import { Footer } from '../Layout'
import { ScrollToTopButton } from '../Layout'
import GalleryBanner from './GalleryBanner'
import GalleryTabs from './GalleryTabs'
import GalleryPagination from './GalleryPagination'
import GalleryLightbox from './GalleryLightbox'
import { allFiles } from '../../data/galleryData'
import type { GalleryItem } from '../../data/galleryData'

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

interface GalleryProps {
  onNavigate?: (page: string) => void
}

export default function Gallery({ onNavigate }: GalleryProps) {
  const { t } = useTranslation()
  const { fadeInDown, fadeInUp, staggerContainer } = useAnimation()
  const [activeTab, setActiveTab] = useState('All Photos')
  const [currentPage, setCurrentPage] = useState(1)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [imageLoadStates, setImageLoadStates] = useState<
    Record<string, { loaded: boolean; error: boolean }>
  >({})
  const itemsPerPage = 4
  const galleryRef = useRef<HTMLDivElement>(null)

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName)
    setCurrentPage(1)
    setImageLoadStates({})
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const handleImageLoad = (titleKey: string) => {
    setImageLoadStates((prev) => ({
      ...prev,
      [titleKey]: { loaded: true, error: false },
    }))
  }

  const handleImageError = (titleKey: string) => {
    setImageLoadStates((prev) => ({
      ...prev,
      [titleKey]: { loaded: true, error: true },
    }))
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const navigateLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  const filteredFiles =
    activeTab === 'All Photos' ? allFiles : allFiles.filter((file) => file.category === activeTab)

  const totalItems = filteredFiles.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = filteredFiles.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} activePage="gallery" />
      <div className="relative -mt-40 sm:-mt-44 lg:-mt-48">
        <GalleryBanner onNavigate={onNavigate} />
      </div>

      <GalleryTabs activeTab={activeTab} onTabChange={handleTabChange} categoryCounts={allFiles} />

      <div className="bg-white" ref={galleryRef}>
        <div className="relative mx-auto max-w-7xl px-6 py-16 pt-12 sm:px-6 sm:py-16 sm:pt-12 lg:px-8 lg:py-16 lg:pt-12">
          <motion.div
            className="mx-auto max-w-2xl text-center lg:max-w-4xl"
            variants={fadeInDown}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-teal-600">
              {t(`gallery.titles.${getCategoryKey(activeTab)}`)}
            </h2>
            <p className="mt-4 text-lg/8 text-slate-700">{t('gallery.subtitleDesc')}</p>
          </motion.div>

          <div className="mt-12">
            {currentItems.length > 0 ? (
              <motion.ul
                key={activeTab}
                role="list"
                className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {currentItems.map((file, index) => {
                  const loadState = imageLoadStates[file.titleKey]
                  const isLoaded = loadState?.loaded ?? false
                  const hasError = loadState?.error ?? false

                  return (
                    <motion.li
                      key={`${file.titleKey}-${index}`}
                      className="relative"
                      variants={fadeInUp}
                    >
                      <div
                        className="group overflow-hidden rounded-md bg-slate-100 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-teal-600 cursor-pointer"
                        onClick={() => openLightbox(startIndex + index)}
                      >
                        {!isLoaded && !hasError && (
                          <div className="absolute inset-0 animate-pulse bg-slate-200 rounded-md" />
                        )}

                        {hasError ? (
                          <div className="aspect-10/7 flex flex-col items-center justify-center bg-slate-100 rounded-md">
                            <svg
                              className="h-12 w-12 text-slate-300"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <p className="mt-2 text-sm text-slate-400">{t('gallery.imageError')}</p>
                          </div>
                        ) : (
                          <img
                            alt={t(`gallery.items.${file.titleKey}`)}
                            src={file.source}
                            loading="lazy"
                            decoding="async"
                            fetchPriority="low"
                            onLoad={() => handleImageLoad(file.titleKey)}
                            onError={() => handleImageError(file.titleKey)}
                            className={`pointer-events-none aspect-10/7 rounded-md shadow-lg object-cover outline -outline-offset-1 outline-black/5 group-hover:scale-105 transition-all duration-300 ${
                              isLoaded && !hasError ? 'opacity-100' : 'opacity-0'
                            }`}
                          />
                        )}

                        <button type="button" className="absolute inset-0 focus:outline-hidden">
                          <span className="sr-only">
                            {t('gallery.viewDetails')} {t(`gallery.items.${file.titleKey}`)}
                          </span>
                        </button>
                      </div>
                      <p className="pointer-events-none mt-2 block truncate text-base font-medium text-teal-700">
                        {t(`gallery.items.${file.titleKey}`)}
                      </p>
                    </motion.li>
                  )
                })}
              </motion.ul>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-slate-500">{t('gallery.noItemsFound')}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <GalleryPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        totalPosts={filteredFiles.length}
        postsPerPage={itemsPerPage}
      />

      <GalleryLightbox
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        items={filteredFiles as GalleryItem[]}
        onClose={closeLightbox}
        onNavigate={navigateLightbox}
      />

      <ScrollToTopButton />
      <Footer onNavigate={onNavigate} />
    </div>
  )
}
