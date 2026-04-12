import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
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
    onClose: vi.fn(),
    onNavigateRegister: vi.fn(),
    onNavigateForgotPassword: vi.fn(),
    onSuccess: vi.fn(),
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
