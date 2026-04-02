import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import ReviewsBanner from './ReviewsBanner'

const meta: Meta<typeof ReviewsBanner> = {
  title: 'GuestReviews/ReviewsBanner',
  component: ReviewsBanner,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof ReviewsBanner>

export const Default: Story = {}
