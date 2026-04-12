import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import Location from './Location'

const meta: Meta<typeof Location> = {
  title: 'Location/Location',
  component: Location,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof Location>

export const Default: Story = {}
