import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import TermsOfService from './TermsOfService'

const meta: Meta<typeof TermsOfService> = {
  title: 'Legal/TermsOfService',
  component: TermsOfService,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof TermsOfService>

export const Default: Story = {}
