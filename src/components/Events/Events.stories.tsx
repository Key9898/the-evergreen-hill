import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import Events from './Events'

const meta: Meta<typeof Events> = {
  title: 'Events/Events',
  component: Events,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof Events>

export const Default: Story = {}
