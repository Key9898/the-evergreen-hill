import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import SwimmingPool from './SwimmingPool'

const meta: Meta<typeof SwimmingPool> = {
  title: 'SwimmingPool/SwimmingPool',
  component: SwimmingPool,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof SwimmingPool>

export const Default: Story = {}
