import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import SwimmingPoolBanner from './SwimmingPoolBanner'

const meta: Meta<typeof SwimmingPoolBanner> = {
  title: 'SwimmingPool/SwimmingPoolBanner',
  component: SwimmingPoolBanner,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof SwimmingPoolBanner>

export const Default: Story = {}
