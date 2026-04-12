import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import RoomsAndSuitesPagination from './RoomsAndSuitesPagination'

const meta: Meta<typeof RoomsAndSuitesPagination> = {
  title: 'RoomsAndSuites/RoomsAndSuitesPagination',
  component: RoomsAndSuitesPagination,
  tags: ['autodocs'],
  args: {
    onPageChange: vi.fn(),
    currentPage: 1,
    totalPages: 2,
    totalPosts: 8,
    postsPerPage: 4,
  },
}

export default meta
type Story = StoryObj<typeof RoomsAndSuitesPagination>

export const Default: Story = {}

export const SecondPage: Story = {
  args: {
    currentPage: 2,
  },
}
