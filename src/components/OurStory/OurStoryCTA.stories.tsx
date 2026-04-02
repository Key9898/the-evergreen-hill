import type { Meta, StoryObj } from '@storybook/react-vite'
import OurStoryCTA from './OurStoryCTA'

const meta: Meta<typeof OurStoryCTA> = {
  title: 'OurStory/OurStoryCTA',
  component: OurStoryCTA,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof OurStoryCTA>

export const Default: Story = {}
