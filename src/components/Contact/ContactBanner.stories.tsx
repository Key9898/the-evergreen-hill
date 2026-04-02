import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import ContactBanner from './ContactBanner'

const meta: Meta<typeof ContactBanner> = {
  title: 'Contact/ContactBanner',
  component: ContactBanner,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof ContactBanner>

export const Default: Story = {}
