import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import CheckForm from './CheckForm'

const meta: Meta<typeof CheckForm> = {
  title: 'RoomsAndSuites/CheckForm',
  component: CheckForm,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof CheckForm>

export const Default: Story = {}
