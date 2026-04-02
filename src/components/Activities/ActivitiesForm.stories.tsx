import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import ActivitiesForm from './ActivitiesForm'

const meta: Meta<typeof ActivitiesForm> = {
  title: 'Activities/ActivitiesForm',
  component: ActivitiesForm,
  tags: ['autodocs'],
  args: {
    onClose: fn(),
    onSubmit: fn(),
  },
}

export default meta
type Story = StoryObj<typeof ActivitiesForm>

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
