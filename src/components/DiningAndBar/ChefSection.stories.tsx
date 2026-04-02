import type { Meta, StoryObj } from '@storybook/react-vite'
import ChefSection from './ChefSection'

const meta: Meta<typeof ChefSection> = {
  title: 'DiningAndBar/ChefSection',
  component: ChefSection,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ChefSection>

export const Default: Story = {}
