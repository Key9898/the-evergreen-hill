import type { Room } from '../../types/room'

export const mockRooms: Room[] = [
  {
    id: 'room-1',
    name: 'Deluxe Room',
    type: 'Deluxe Room',
    description: 'A comfortable deluxe room with stunning views.',
    price: 120,
    capacity: { adults: 2, children: 1 },
    size: 32,
    features: ['King Bed', 'Mountain View', 'Free WiFi', 'Air Conditioning'],
    images: [],
    available: true,
  },
  {
    id: 'room-2',
    name: 'Junior Suite',
    type: 'Junior Suite',
    description: 'Spacious junior suite with a separate living area.',
    price: 200,
    capacity: { adults: 2, children: 2 },
    size: 55,
    features: ['King Bed', 'Living Area', 'Mountain View', 'Free WiFi', 'Bathtub'],
    images: [],
    available: true,
  },
]
