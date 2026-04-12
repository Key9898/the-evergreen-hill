import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
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
    onClose: vi.fn(),
    onNavigateLogin: vi.fn(),
    onSuccess: vi.fn(),
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
