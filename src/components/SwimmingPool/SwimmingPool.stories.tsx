import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import SwimmingPool from './SwimmingPool'

const meta: Meta<typeof SwimmingPool> = {
  title: 'SwimmingPool/SwimmingPool',
  component: SwimmingPool,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof SwimmingPool>

export const Default: Story = {}
