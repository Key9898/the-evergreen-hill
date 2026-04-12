import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
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
    onClose: vi.fn(),
    onNavigateLogin: vi.fn(),
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
