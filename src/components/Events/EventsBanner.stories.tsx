import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import EventsBanner from './EventsBanner'

const meta: Meta<typeof EventsBanner> = {
  title: 'Events/EventsBanner',
  component: EventsBanner,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof EventsBanner>

export const Default: Story = {}
