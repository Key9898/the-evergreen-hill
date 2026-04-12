import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import GalleryTabs from './GalleryTabs'

const meta: Meta<typeof GalleryTabs> = {
  title: 'Gallery/GalleryTabs',
  component: GalleryTabs,
  tags: ['autodocs'],
  args: {
    onTabChange: vi.fn(),
    activeTab: 'All Photos',
  },
}

export default meta
type Story = StoryObj<typeof GalleryTabs>

export const Default: Story = {}

export const RoomsTab: Story = {
  args: {
    activeTab: 'Rooms & Suites',
  },
}
