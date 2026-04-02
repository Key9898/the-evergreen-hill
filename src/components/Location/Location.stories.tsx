import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import Location from './Location'

const meta: Meta<typeof Location> = {
  title: 'Location/Location',
  component: Location,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof Location>

export const Default: Story = {}
