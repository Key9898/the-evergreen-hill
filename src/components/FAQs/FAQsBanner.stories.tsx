import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import FAQsBanner from './FAQsBanner'

const meta: Meta<typeof FAQsBanner> = {
  title: 'FAQs/FAQsBanner',
  component: FAQsBanner,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof FAQsBanner>

export const Default: Story = {}
