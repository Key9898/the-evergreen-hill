import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import GalleryBanner from './GalleryBanner'

const meta: Meta<typeof GalleryBanner> = {
  title: 'Gallery/GalleryBanner',
  component: GalleryBanner,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof GalleryBanner>

export const Default: Story = {}
