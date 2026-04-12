import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import Experiences from './Experiences'

const meta: Meta<typeof Experiences> = {
  title: 'Experiences/Experiences',
  component: Experiences,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof Experiences>

export const Default: Story = {}
