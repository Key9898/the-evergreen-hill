import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import Gallery from './Gallery'

const meta: Meta<typeof Gallery> = {
  title: 'Gallery/Gallery',
  component: Gallery,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof Gallery>

export const Default: Story = {}
