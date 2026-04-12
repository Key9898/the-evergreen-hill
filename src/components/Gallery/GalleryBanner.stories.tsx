import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import GalleryBanner from './GalleryBanner'

const meta: Meta<typeof GalleryBanner> = {
  title: 'Gallery/GalleryBanner',
  component: GalleryBanner,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof GalleryBanner>

export const Default: Story = {}
