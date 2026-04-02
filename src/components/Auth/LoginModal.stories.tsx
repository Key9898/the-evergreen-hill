import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import LoginModal from './LoginModal'
import { AuthProvider } from '../../context/AuthContext'

const meta: Meta<typeof LoginModal> = {
  title: 'Auth/LoginModal',
  component: LoginModal,
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
    onNavigateRegister: fn(),
    onNavigateForgotPassword: fn(),
    onSuccess: fn(),
  },
}

export default meta
type Story = StoryObj<typeof LoginModal>

export const Closed: Story = {
  args: { isOpen: false },
}

export const Open: Story = {
  args: { isOpen: true },
}
