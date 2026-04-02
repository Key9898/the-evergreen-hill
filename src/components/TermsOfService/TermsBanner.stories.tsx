import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import TermsBanner from './TermsBanner'

const meta: Meta<typeof TermsBanner> = {
  title: 'Legal/TermsBanner',
  component: TermsBanner,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof TermsBanner>

export const Default: Story = {}
