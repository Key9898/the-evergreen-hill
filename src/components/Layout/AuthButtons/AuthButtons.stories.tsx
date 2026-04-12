import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import AuthButtons from '.'
import { AuthProvider } from '../../../context/AuthContext'

const meta: Meta<typeof AuthButtons> = {
  title: 'Layout/AuthButtons',
  component: AuthButtons,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-slate-700 p-4 rounded-lg">
        <AuthProvider>
          <Story />
        </AuthProvider>
      </div>
    ),
  ],
  args: {
    onOpenLogin: vi.fn(),
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof AuthButtons>

export const SignedOut: Story = {}
