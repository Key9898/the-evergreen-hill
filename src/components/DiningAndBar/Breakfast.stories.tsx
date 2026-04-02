import type { Meta, StoryObj } from '@storybook/react-vite'
import Breakfast from './Breakfast'

const meta: Meta<typeof Breakfast> = {
  title: 'DiningAndBar/Breakfast',
  component: Breakfast,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Breakfast>

export const Default: Story = {}
