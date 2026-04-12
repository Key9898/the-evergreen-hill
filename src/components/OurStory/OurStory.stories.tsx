import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import OurStory from './OurStory'

const meta: Meta<typeof OurStory> = {
  title: 'OurStory/OurStory',
  component: OurStory,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof OurStory>

export const Default: Story = {}
