import type { Meta, StoryObj } from '@storybook/react-vite'
import HotelMap from './HotelMap'

const meta: Meta<typeof HotelMap> = {
  title: 'Contact/HotelMap',
  component: HotelMap,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof HotelMap>

export const Default: Story = {}
