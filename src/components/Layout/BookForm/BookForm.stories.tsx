import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import BookForm from '.'

const meta: Meta<typeof BookForm> = {
  title: 'Layout/BookForm',
  component: BookForm,
  tags: ['autodocs'],
  args: {
    onClose: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof BookForm>

export const Closed: Story = {
  args: {
    isOpen: false,
  },
}

export const Open: Story = {
  args: {
    isOpen: true,
  },
}

export const WithDefaultRoom: Story = {
  args: {
    isOpen: true,
    defaultRoomType: 'Deluxe Garden View',
  },
}
