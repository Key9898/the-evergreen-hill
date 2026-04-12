import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import ActivitiesBanner from './ActivitiesBanner'

const meta: Meta<typeof ActivitiesBanner> = {
  title: 'Activities/ActivitiesBanner',
  component: ActivitiesBanner,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof ActivitiesBanner>

export const Default: Story = {}
