import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import ViewDetails from './ViewDetails'

const meta: Meta<typeof ViewDetails> = {
  title: 'RoomsAndSuites/ViewDetails',
  component: ViewDetails,
  tags: ['autodocs'],
  args: {
    onClose: fn(),
  },
}

export default meta
type Story = StoryObj<typeof ViewDetails>

export const Closed: Story = {
  args: {
    open: false,
    room: null,
  },
}

export const Open: Story = {
  args: {
    open: true,
    room: {
      name: 'Deluxe Garden View',
    },
  },
}
