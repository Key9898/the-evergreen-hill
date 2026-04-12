import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import Footer from '.'

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {}
