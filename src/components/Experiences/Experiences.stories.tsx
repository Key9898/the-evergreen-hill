import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import Experiences from './Experiences'

const meta: Meta<typeof Experiences> = {
  title: 'Experiences/Experiences',
  component: Experiences,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof Experiences>

export const Default: Story = {}
