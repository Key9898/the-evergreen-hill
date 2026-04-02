import type { Meta, StoryObj } from '@storybook/react-vite'
import EventSpaces from './EventSpaces'

const meta: Meta<typeof EventSpaces> = {
  title: 'Events/EventSpaces',
  component: EventSpaces,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof EventSpaces>

export const Default: Story = {}
