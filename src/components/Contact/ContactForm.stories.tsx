import type { Meta, StoryObj } from '@storybook/react-vite'
import ContactForm from './ContactForm'

const meta: Meta<typeof ContactForm> = {
  title: 'Contact/ContactForm',
  component: ContactForm,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ContactForm>

export const Default: Story = {}
