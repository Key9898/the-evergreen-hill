import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import Contact from './Contact'

const meta: Meta<typeof Contact> = {
  title: 'Contact/Contact',
  component: Contact,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof Contact>

export const Default: Story = {}
