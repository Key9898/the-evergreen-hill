import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import ReviewsBanner from './ReviewsBanner'

const meta: Meta<typeof ReviewsBanner> = {
  title: 'GuestReviews/ReviewsBanner',
  component: ReviewsBanner,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof ReviewsBanner>

export const Default: Story = {}
