import { useState } from 'react'

export function usePagination<T>(items: T[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(items.length / itemsPerPage)
  const indexOfLast = currentPage * itemsPerPage
  const indexOfFirst = indexOfLast - itemsPerPage
  const currentItems = items.slice(indexOfFirst, indexOfLast)

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page)
  }

  return {
    currentPage,
    totalPages,
    currentItems,
    goToPage,
    totalItems: items.length,
    indexOfFirst,
    indexOfLast: Math.min(indexOfLast, items.length),
  }
}
