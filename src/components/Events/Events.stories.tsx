import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import Events from './Events'

const meta: Meta<typeof Events> = {
  title: 'Events/Events',
  component: Events,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof Events>

export const Default: Story = {}
