import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import PaymentForm from './PaymentForm'
import { PaymentProvider } from '../../context/PaymentContext'

const meta: Meta<typeof PaymentForm> = {
  title: 'Payment/PaymentForm',
  component: PaymentForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <PaymentProvider>
        <Story />
      </PaymentProvider>
    ),
  ],
  args: {
    totalAmount: 360,
    currency: 'USD',
    onCancel: vi.fn(),
    onSuccess: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof PaymentForm>

export const Default: Story = {}
