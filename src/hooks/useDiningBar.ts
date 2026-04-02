import { useState } from 'react'

export function useDiningBar() {
  const [activeTab, setActiveTab] = useState('All Menus')

  return { activeTab, setActiveTab }
}
