import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import ForgotPasswordModal from './ForgotPasswordModal'
import { AuthProvider } from '../../context/AuthContext'

const meta: Meta<typeof ForgotPasswordModal> = {
  title: 'Auth/ForgotPasswordModal',
  component: ForgotPasswordModal,
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
  },
}

export default meta
type Story = StoryObj<typeof ForgotPasswordModal>

export const Closed: Story = {
  args: { isOpen: false },
}

export const Open: Story = {
  args: { isOpen: true },
}
