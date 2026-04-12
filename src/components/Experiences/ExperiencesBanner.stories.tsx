import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import ExperiencesBanner from './ExperiencesBanner'

const meta: Meta<typeof ExperiencesBanner> = {
  title: 'Experiences/ExperiencesBanner',
  component: ExperiencesBanner,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof ExperiencesBanner>

export const Default: Story = {}
