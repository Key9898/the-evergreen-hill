import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import DiningAndBar from './DiningAndBar'

const meta: Meta<typeof DiningAndBar> = {
  title: 'DiningAndBar/DiningAndBar',
  component: DiningAndBar,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof DiningAndBar>

export const Default: Story = {}
