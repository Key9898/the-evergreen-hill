import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import BookingConfirmation from './BookingConfirmation'

const meta: Meta<typeof BookingConfirmation> = {
  title: 'Payment/BookingConfirmation',
  component: BookingConfirmation,
  tags: ['autodocs'],
  args: {
    onBackToHome: vi.fn(),
    onViewBookings: vi.fn(),
    confirmation: {
      bookingId: 'booking-001',
      confirmationNumber: 'EH-2024-001',
      roomName: 'Deluxe Garden View',
      checkIn: new Date('2024-12-20').toISOString(),
      checkOut: new Date('2024-12-23').toISOString(),
      guestName: 'John Doe',
      guestEmail: 'john@example.com',
      totalPaid: 360,
      currency: 'USD',
      paymentIntentId: 'pi_test_001',
    },
  },
}

export default meta
type Story = StoryObj<typeof BookingConfirmation>

export const Default: Story = {}
