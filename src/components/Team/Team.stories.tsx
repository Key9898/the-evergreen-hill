import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import Team from './Team'

const meta: Meta<typeof Team> = {
  title: 'Team/Team',
  component: Team,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof Team>

export const Default: Story = {}
