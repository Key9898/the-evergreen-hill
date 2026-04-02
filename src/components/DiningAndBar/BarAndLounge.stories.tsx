import type { Meta, StoryObj } from '@storybook/react-vite'
import BarAndLounge from './BarAndLounge'

const meta: Meta<typeof BarAndLounge> = {
  title: 'DiningAndBar/BarAndLounge',
  component: BarAndLounge,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BarAndLounge>

export const Default: Story = {}
