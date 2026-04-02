import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import RoomsAndSuites from './RoomsAndSuites'

const meta: Meta<typeof RoomsAndSuites> = {
  title: 'RoomsAndSuites/RoomsAndSuites',
  component: RoomsAndSuites,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof RoomsAndSuites>

export const Default: Story = {}
