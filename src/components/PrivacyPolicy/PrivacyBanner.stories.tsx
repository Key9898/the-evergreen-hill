import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import PrivacyBanner from './PrivacyBanner'

const meta: Meta<typeof PrivacyBanner> = {
  title: 'Legal/PrivacyBanner',
  component: PrivacyBanner,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof PrivacyBanner>

export const Default: Story = {}
