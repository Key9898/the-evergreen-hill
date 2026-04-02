import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import Activities from './Activities'

const meta: Meta<typeof Activities> = {
  title: 'Activities/Activities',
  component: Activities,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof Activities>

export const Default: Story = {}
