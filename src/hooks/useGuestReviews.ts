import { useState, useEffect } from 'react'
import type { ReviewFormData } from './useReviewsForm'
import { getReviews, createReview } from '../services/reviews'
import { useAuthContext } from '../context/AuthContext'

export type StoredReview = {
  id: string
  name: string
  country: string
  roomType: string
  rating: number
  content: string
  date: string
  userId?: string
  avatarDataUrl?: string | null
}

export function useGuestReviews(reviewsPerPage = 6) {
  const { user } = useAuthContext()
  const [reviews, setReviews] = useState<StoredReview[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [reviewFormOpen, setReviewFormOpen] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getReviews()
      .then((data) => setReviews(data))
      .catch(() => setError('Failed to load reviews'))
      .finally(() => setIsLoading(false))
  }, [])

  const handleReviewSubmit = async (data: ReviewFormData) => {
    if (!user) {
      setError('You must be signed in to leave a review')
      return
    }

    try {
      const created = await createReview({
        name: data.name,
        country: data.country,
        roomType: data.roomType ?? '',
        rating: data.rating,
        content: data.content,
        date: data.date,
        userId: user.uid,
      })
      const newReview: StoredReview = {
        ...created,
        avatarDataUrl: data.avatarDataUrl ?? null,
      }
      setReviews((prev) => [newReview, ...prev])
    } catch {
      setError('Failed to submit review. Please try again.')
    }
  }

  const totalPages = Math.ceil(reviews.length / reviewsPerPage)
  const indexOfLast = currentPage * reviewsPerPage
  const indexOfFirst = indexOfLast - reviewsPerPage
  const currentReviews = reviews.slice(indexOfFirst, indexOfLast)

  return {
    reviews,
    currentReviews,
    currentPage,
    totalPages,
    totalReviews: reviews.length,
    isLoading,
    error,
    reviewFormOpen,
    setReviewFormOpen,
    setCurrentPage,
    handleReviewSubmit,
    indexOfFirst,
    indexOfLast: Math.min(indexOfLast, reviews.length),
  }
}
