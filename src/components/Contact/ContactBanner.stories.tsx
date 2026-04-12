import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import ContactBanner from './ContactBanner'

const meta: Meta<typeof ContactBanner> = {
  title: 'Contact/ContactBanner',
  component: ContactBanner,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof ContactBanner>

export const Default: Story = {}
