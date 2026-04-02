import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import TeamBanner from './TeamBanner'

const meta: Meta<typeof TeamBanner> = {
  title: 'Team/TeamBanner',
  component: TeamBanner,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof TeamBanner>

export const Default: Story = {}
