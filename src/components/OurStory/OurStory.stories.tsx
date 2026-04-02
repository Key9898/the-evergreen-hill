import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import OurStory from './OurStory'

const meta: Meta<typeof OurStory> = {
  title: 'OurStory/OurStory',
  component: OurStory,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof OurStory>

export const Default: Story = {}
