import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import FAQs from './FAQs'

const meta: Meta<typeof FAQs> = {
  title: 'FAQs/FAQs',
  component: FAQs,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof FAQs>

export const Default: Story = {}
