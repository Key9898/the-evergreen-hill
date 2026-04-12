import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import type { GalleryItem } from '../../data/galleryData'

interface GalleryLightboxProps {
  isOpen: boolean
  currentIndex: number
  items: GalleryItem[]
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function GalleryLightbox({
  isOpen,
  currentIndex,
  items,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const { t } = useTranslation()

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1)
    }
  }, [currentIndex, onNavigate])

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onNavigate(currentIndex + 1)
    }
  }, [currentIndex, items.length, onNavigate])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          handlePrevious()
          break
        case 'ArrowRight':
          handleNext()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, handlePrevious, handleNext])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (items.length === 0) return null

  const currentItem = items[currentIndex]
  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < items.length - 1

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute -right-4 -top-4 z-10 rounded-full bg-white/10 p-2 text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
              aria-label={t('common.close')}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {hasPrevious && (
              <motion.button
                type="button"
                onClick={handlePrevious}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -left-16 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
                aria-label={t('gallery.pagination.previous')}
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </motion.button>
            )}

            {hasNext && (
              <motion.button
                type="button"
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -right-16 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
                aria-label={t('gallery.pagination.next')}
              >
                <ChevronRightIcon className="h-6 w-6" />
              </motion.button>
            )}

            <img
              src={currentItem.source}
              alt={t(`gallery.items.${currentItem.titleKey}`)}
              className="max-h-[85vh] max-w-[85vw] rounded-lg object-contain shadow-2xl"
            />

            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center">
              <p className="text-lg font-medium text-white">
                {t(`gallery.items.${currentItem.titleKey}`)}
              </p>
              <p className="text-sm text-white/60">
                {currentIndex + 1} / {items.length}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
