import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import DiningAndBarPagination from './DiningAndBarPagination'

const meta: Meta<typeof DiningAndBarPagination> = {
  title: 'DiningAndBar/DiningAndBarPagination',
  component: DiningAndBarPagination,
  tags: ['autodocs'],
  args: {
    onPageChange: vi.fn(),
    currentPage: 1,
    totalPages: 3,
    totalPosts: 18,
    postsPerPage: 6,
  },
}

export default meta
type Story = StoryObj<typeof DiningAndBarPagination>

export const Default: Story = {}
