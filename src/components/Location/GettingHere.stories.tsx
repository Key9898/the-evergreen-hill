import type { Meta, StoryObj } from '@storybook/react-vite'
import GettingHere from './GettingHere'

const meta: Meta<typeof GettingHere> = {
  title: 'Location/GettingHere',
  component: GettingHere,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof GettingHere>

export const Default: Story = {}
