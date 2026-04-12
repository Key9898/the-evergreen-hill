import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import Breadcrumbs from '.'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Layout/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
    pages: [{ name: 'Rooms & Suites', href: '#roomsAndSuites', current: true }],
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {}

export const DarkVariant: Story = {
  args: {
    variant: 'dark',
  },
}

export const MultiLevel: Story = {
  args: {
    pages: [
      { name: 'Rooms & Suites', href: '#roomsAndSuites', current: false },
      { name: 'Deluxe Garden View', href: '#deluxe', current: true },
    ],
  },
}
