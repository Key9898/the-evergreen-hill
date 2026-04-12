import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import SpaAndWellnessCenter from './SpaAndWellnessCenter'

const meta: Meta<typeof SpaAndWellnessCenter> = {
  title: 'SpaAndWellness/SpaAndWellnessCenter',
  component: SpaAndWellnessCenter,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof SpaAndWellnessCenter>

export const Default: Story = {}
