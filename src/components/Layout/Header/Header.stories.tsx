import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import Header from './Header'

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {}

export const ActiveRoom: Story = {
  args: {
    activePage: 'roomsAndSuites',
  },
}

export const ActiveGallery: Story = {
  args: {
    activePage: 'gallery',
  },
}
