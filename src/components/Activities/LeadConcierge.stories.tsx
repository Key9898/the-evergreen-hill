import type { Meta, StoryObj } from '@storybook/react-vite'
import LeadConcierge from './LeadConcierge'

const meta: Meta<typeof LeadConcierge> = {
  title: 'Activities/LeadConcierge',
  component: LeadConcierge,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LeadConcierge>

export const Default: Story = {}
