import type { Meta, StoryObj } from '@storybook/react-vite'
import SpaAndWellnessManager from './SpaAndWellnessManager'

const meta: Meta<typeof SpaAndWellnessManager> = {
  title: 'SpaAndWellness/SpaAndWellnessManager',
  component: SpaAndWellnessManager,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SpaAndWellnessManager>

export const Default: Story = {}
