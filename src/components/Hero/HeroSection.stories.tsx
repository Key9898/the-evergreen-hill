import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import HeroSection from './HeroSection'

const meta: Meta<typeof HeroSection> = {
  title: 'Hero/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof HeroSection>

export const Default: Story = {}
