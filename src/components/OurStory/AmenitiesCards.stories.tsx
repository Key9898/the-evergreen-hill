import type { Meta, StoryObj } from '@storybook/react-vite'
import AmenitiesCards from './AmenitiesCards'

const meta: Meta<typeof AmenitiesCards> = {
  title: 'OurStory/AmenitiesCards',
  component: AmenitiesCards,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AmenitiesCards>

export const Default: Story = {}
