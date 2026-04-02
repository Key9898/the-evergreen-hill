import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import Footer from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {}
