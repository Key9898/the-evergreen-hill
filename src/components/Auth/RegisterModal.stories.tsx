import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import RegisterModal from './RegisterModal'
import { AuthProvider } from '../../context/AuthContext'

const meta: Meta<typeof RegisterModal> = {
  title: 'Auth/RegisterModal',
  component: RegisterModal,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <AuthProvider>
        <Story />
      </AuthProvider>
    ),
  ],
  args: {
    onClose: fn(),
    onNavigateLogin: fn(),
    onSuccess: fn(),
  },
}

export default meta
type Story = StoryObj<typeof RegisterModal>

export const Closed: Story = {
  args: { isOpen: false },
}

export const Open: Story = {
  args: { isOpen: true },
}
