import type { Meta, StoryObj } from '@storybook/react-vite'
import Dinner from './Dinner'

const meta: Meta<typeof Dinner> = {
  title: 'DiningAndBar/Dinner',
  component: Dinner,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Dinner>

export const Default: Story = {}
