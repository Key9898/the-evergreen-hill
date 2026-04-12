import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import FAQs from './FAQs'

const meta: Meta<typeof FAQs> = {
  title: 'FAQs/FAQs',
  component: FAQs,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof FAQs>

export const Default: Story = {}
