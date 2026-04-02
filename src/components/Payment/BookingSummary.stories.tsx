import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import BookingSummary from './BookingSummary'

const meta: Meta<typeof BookingSummary> = {
  title: 'Payment/BookingSummary',
  component: BookingSummary,
  tags: ['autodocs'],
  args: {
    onProceed: fn(),
    onBack: fn(),
    summary: {
      bookingId: 'booking-001',
      roomName: 'Deluxe Garden View',
      roomType: 'Deluxe Room',
      checkIn: new Date('2024-12-20').toISOString(),
      checkOut: new Date('2024-12-23').toISOString(),
      nights: 3,
      adults: 2,
      children: 0,
      pricePerNight: 120,
      totalPrice: 360,
      currency: 'USD',
      guestName: 'John Doe',
      guestEmail: 'john@example.com',
    },
  },
}

export default meta
type Story = StoryObj<typeof BookingSummary>

export const Default: Story = {}

export const WithChildren: Story = {
  args: {
    summary: {
      bookingId: 'booking-002',
      roomName: 'Honeymoon Suite',
      roomType: 'Suite',
      checkIn: new Date('2024-12-24').toISOString(),
      checkOut: new Date('2024-12-26').toISOString(),
      nights: 2,
      adults: 2,
      children: 1,
      pricePerNight: 280,
      totalPrice: 560,
      currency: 'USD',
      guestName: 'Jane Smith',
      guestEmail: 'jane@example.com',
    },
  },
}
