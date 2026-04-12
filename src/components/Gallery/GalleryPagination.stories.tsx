import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import GalleryPagination from './GalleryPagination'

const meta: Meta<typeof GalleryPagination> = {
  title: 'Gallery/GalleryPagination',
  component: GalleryPagination,
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
type Story = StoryObj<typeof GalleryPagination>

export const Default: Story = {}

export const MiddlePage: Story = {
  args: {
    currentPage: 2,
  },
}
