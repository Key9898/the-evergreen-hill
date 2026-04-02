import type { Meta, StoryObj } from '@storybook/react-vite'
import ScrollToTopButton from './ScrollToTopButton'

const meta: Meta<typeof ScrollToTopButton> = {
  title: 'Layout/ScrollToTopButton',
  component: ScrollToTopButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ScrollToTopButton>

export const Default: Story = {}
