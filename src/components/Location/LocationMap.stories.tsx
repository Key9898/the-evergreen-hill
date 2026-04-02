import type { Meta, StoryObj } from '@storybook/react-vite'
import LocationMap from './LocationMap'

const meta: Meta<typeof LocationMap> = {
  title: 'Location/LocationMap',
  component: LocationMap,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LocationMap>

export const Default: Story = {}
