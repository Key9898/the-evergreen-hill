import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import DiningAndBarBanner from './DiningAndBarBanner'

const meta: Meta<typeof DiningAndBarBanner> = {
  title: 'DiningAndBar/DiningAndBarBanner',
  component: DiningAndBarBanner,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof DiningAndBarBanner>

export const Default: Story = {}
