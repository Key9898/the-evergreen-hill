import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import Contact from './Contact'

const meta: Meta<typeof Contact> = {
  title: 'Contact/Contact',
  component: Contact,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof Contact>

export const Default: Story = {}
