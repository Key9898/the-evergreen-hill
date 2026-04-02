import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import SpaForm from './SpaForm'

const meta: Meta<typeof SpaForm> = {
  title: 'SpaAndWellness/SpaForm',
  component: SpaForm,
  tags: ['autodocs'],
  args: {
    onClose: fn(),
    onSubmit: fn(),
  },
}

export default meta
type Story = StoryObj<typeof SpaForm>

export const Closed: Story = {
  args: {
    open: false,
  },
}

export const Open: Story = {
  args: {
    open: true,
  },
}
