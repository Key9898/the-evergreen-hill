import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import DiningAndBar from './DiningAndBar'

const meta: Meta<typeof DiningAndBar> = {
  title: 'DiningAndBar/DiningAndBar',
  component: DiningAndBar,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof DiningAndBar>

export const Default: Story = {}
