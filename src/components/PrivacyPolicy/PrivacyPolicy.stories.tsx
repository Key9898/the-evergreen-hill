import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import PrivacyPolicy from './PrivacyPolicy'

const meta: Meta<typeof PrivacyPolicy> = {
  title: 'Legal/PrivacyPolicy',
  component: PrivacyPolicy,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof PrivacyPolicy>

export const Default: Story = {}
