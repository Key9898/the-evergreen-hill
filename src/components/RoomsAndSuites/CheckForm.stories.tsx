import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import CheckForm from './CheckForm'

const meta: Meta<typeof CheckForm> = {
  title: 'RoomsAndSuites/CheckForm',
  component: CheckForm,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof CheckForm>

export const Default: Story = {}
