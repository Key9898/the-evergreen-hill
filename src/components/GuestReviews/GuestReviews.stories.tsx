import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import GuestReviews from './GuestReviews'

const meta: Meta<typeof GuestReviews> = {
  title: 'GuestReviews/GuestReviews',
  component: GuestReviews,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof GuestReviews>

export const Default: Story = {}
