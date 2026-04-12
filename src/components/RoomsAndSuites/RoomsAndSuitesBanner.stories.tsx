import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import RoomsAndSuitesBanner from './RoomsAndSuitesBanner'

const meta: Meta<typeof RoomsAndSuitesBanner> = {
  title: 'RoomsAndSuites/RoomsAndSuitesBanner',
  component: RoomsAndSuitesBanner,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof RoomsAndSuitesBanner>

export const Default: Story = {}
