import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import ReviewsForm from './ReviewsForm'

const meta: Meta<typeof ReviewsForm> = {
  title: 'GuestReviews/ReviewsForm',
  component: ReviewsForm,
  tags: ['autodocs'],
  args: {
    onClose: vi.fn(),
    onSubmit: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof ReviewsForm>

export const Closed: Story = {
  args: {
    open: false,
  },
}

export const Open: Story = {
  args: {
    open: true,
  },
}
