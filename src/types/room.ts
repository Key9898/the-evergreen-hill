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
