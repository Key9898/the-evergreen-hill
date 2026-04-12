import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import Gallery from './Gallery'

const meta: Meta<typeof Gallery> = {
  title: 'Gallery/Gallery',
  component: Gallery,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof Gallery>

export const Default: Story = {}
