import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import TermsBanner from './TermsBanner'

const meta: Meta<typeof TermsBanner> = {
  title: 'Legal/TermsBanner',
  component: TermsBanner,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof TermsBanner>

export const Default: Story = {}
