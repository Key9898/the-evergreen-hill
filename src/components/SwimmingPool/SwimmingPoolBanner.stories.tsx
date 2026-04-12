import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import SwimmingPoolBanner from './SwimmingPoolBanner'

const meta: Meta<typeof SwimmingPoolBanner> = {
  title: 'SwimmingPool/SwimmingPoolBanner',
  component: SwimmingPoolBanner,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof SwimmingPoolBanner>

export const Default: Story = {}
