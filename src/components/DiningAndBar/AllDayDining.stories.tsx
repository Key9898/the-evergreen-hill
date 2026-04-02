import type { Meta, StoryObj } from '@storybook/react-vite'
import AllDayDining from './AllDayDining'

const meta: Meta<typeof AllDayDining> = {
  title: 'DiningAndBar/AllDayDining',
  component: AllDayDining,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AllDayDining>

export const Default: Story = {}
