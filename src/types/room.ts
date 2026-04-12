export interface Room {
  id: string
  name: string
  type: RoomType
  description: string
  price: number
  capacity: {
    adults: number
    children: number
  }
  size: number
  features: string[]
  images: string[]
  available: boolean
}

export type RoomType =
  | 'Deluxe Room'
  | 'Superior Room'
  | 'Junior Suite'
  | 'Deluxe Suite'
  | 'Executive Suite'
  | 'Presidential Suite'
  | 'Family Suite'
  | 'Honeymoon Suite'

export interface RoomDisplayItem {
  id: number
  nameKey: string
  type: string
  price: string
  guests: string
  size: string
  features: string[]
  imageAlt: string
}
