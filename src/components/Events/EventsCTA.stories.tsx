import type { Meta, StoryObj } from '@storybook/react-vite'
import EventsCTA from './EventsCTA'

const meta: Meta<typeof EventsCTA> = {
  title: 'Events/EventsCTA',
  component: EventsCTA,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof EventsCTA>

export const Default: Story = {}
