import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import LocationBanner from './LocationBanner'

const meta: Meta<typeof LocationBanner> = {
  title: 'Location/LocationBanner',
  component: LocationBanner,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof LocationBanner>

export const Default: Story = {}
