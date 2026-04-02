import { useState } from 'react'

export function useViewDetails<T>() {
  const [open, setOpen] = useState(false)
  const [item, setItem] = useState<T | null>(null)

  const openDetails = (selectedItem: T) => {
    setItem(selectedItem)
    setOpen(true)
  }

  const closeDetails = () => {
    setOpen(false)
    setItem(null)
  }

  return { open, item, openDetails, closeDetails }
}
