import type { Meta, StoryObj } from '@storybook/react-vite'
import GeneralManager from './GeneralManager'

const meta: Meta<typeof GeneralManager> = {
  title: 'SwimmingPool/GeneralManager',
  component: GeneralManager,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof GeneralManager>

export const Default: Story = {}
