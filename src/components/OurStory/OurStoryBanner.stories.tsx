import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import OurStoryBanner from './OurStoryBanner'

const meta: Meta<typeof OurStoryBanner> = {
  title: 'OurStory/OurStoryBanner',
  component: OurStoryBanner,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof OurStoryBanner>

export const Default: Story = {}
