import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import DiningAndBarBanner from './DiningAndBarBanner'

const meta: Meta<typeof DiningAndBarBanner> = {
  title: 'DiningAndBar/DiningAndBarBanner',
  component: DiningAndBarBanner,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof DiningAndBarBanner>

export const Default: Story = {}
