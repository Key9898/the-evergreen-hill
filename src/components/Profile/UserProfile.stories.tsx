import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import UserProfile from './UserProfile'
import { AuthProvider } from '../../context/AuthContext'

const meta: Meta<typeof UserProfile> = {
  title: 'Profile/UserProfile',
  component: UserProfile,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <AuthProvider>
        <Story />
      </AuthProvider>
    ),
  ],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof UserProfile>

export const Default: Story = {}
