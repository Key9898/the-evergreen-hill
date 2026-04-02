import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import EventsForm from './EventsForm'

const meta: Meta<typeof EventsForm> = {
  title: 'Events/EventsForm',
  component: EventsForm,
  tags: ['autodocs'],
  args: {
    onClose: fn(),
    onSubmit: fn(),
  },
}

export default meta
type Story = StoryObj<typeof EventsForm>

export const Closed: Story = {
  args: {
    open: false,
  },
}

export const Open: Story = {
  args: {
    open: true,
  },
}
