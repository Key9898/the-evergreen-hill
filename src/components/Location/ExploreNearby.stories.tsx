import type { Meta, StoryObj } from '@storybook/react-vite'
import ExploreNearby from './ExploreNearby'

const meta: Meta<typeof ExploreNearby> = {
  title: 'Location/ExploreNearby',
  component: ExploreNearby,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ExploreNearby>

export const Default: Story = {}
