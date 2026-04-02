import type { Meta, StoryObj } from '@storybook/react-vite'
import SpaCTA from './SpaCTA'

const meta: Meta<typeof SpaCTA> = {
  title: 'SpaAndWellness/SpaCTA',
  component: SpaCTA,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SpaCTA>

export const Default: Story = {}
