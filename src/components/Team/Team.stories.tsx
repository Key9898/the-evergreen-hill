import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import Team from './Team'

const meta: Meta<typeof Team> = {
  title: 'Team/Team',
  component: Team,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof Team>

export const Default: Story = {}
