import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import GuestReviews from './GuestReviews'

const meta: Meta<typeof GuestReviews> = {
  title: 'GuestReviews/GuestReviews',
  component: GuestReviews,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof GuestReviews>

export const Default: Story = {}
