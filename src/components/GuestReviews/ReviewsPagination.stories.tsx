import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import ReviewsPagination from './ReviewsPagination'

const meta: Meta<typeof ReviewsPagination> = {
  title: 'GuestReviews/ReviewsPagination',
  component: ReviewsPagination,
  tags: ['autodocs'],
  args: {
    onPageChange: fn(),
    currentPage: 1,
    totalPages: 4,
    totalPosts: 24,
    postsPerPage: 6,
  },
}

export default meta
type Story = StoryObj<typeof ReviewsPagination>

export const Default: Story = {}

export const LastPage: Story = {
  args: {
    currentPage: 4,
  },
}
