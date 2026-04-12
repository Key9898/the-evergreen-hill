import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import BookingHistory from './BookingHistory'
import { AuthProvider } from '../../context/AuthContext'

const meta: Meta<typeof BookingHistory> = {
  title: 'Profile/BookingHistory',
  component: BookingHistory,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <AuthProvider>
        <Story />
      </AuthProvider>
    ),
  ],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof BookingHistory>

export const Default: Story = {}
