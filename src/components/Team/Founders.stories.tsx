import type { Meta, StoryObj } from '@storybook/react-vite'
import Founders from './Founders'

const meta: Meta<typeof Founders> = {
  title: 'Team/Founders',
  component: Founders,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Founders>

export const Default: Story = {}
