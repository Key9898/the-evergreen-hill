import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import DiningAndBarTabs from './DiningAndBarTabs'

const meta: Meta<typeof DiningAndBarTabs> = {
  title: 'DiningAndBar/DiningAndBarTabs',
  component: DiningAndBarTabs,
  tags: ['autodocs'],
  args: {
    onTabChange: fn(),
    activeTab: 'All Menus',
  },
}

export default meta
type Story = StoryObj<typeof DiningAndBarTabs>

export const Default: Story = {}

export const BreakfastTab: Story = {
  args: {
    activeTab: 'Breakfast',
  },
}
