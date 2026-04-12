import type { Meta, StoryObj } from '@storybook/react-vite'
import { vi } from 'vitest'
import SpaAndWellnessCenterBanner from './SpaAndWellnessCenterBanner'

const meta: Meta<typeof SpaAndWellnessCenterBanner> = {
  title: 'SpaAndWellness/SpaAndWellnessCenterBanner',
  component: SpaAndWellnessCenterBanner,
  tags: ['autodocs'],
  args: {
    onNavigate: vi.fn(),
  },
}

export default meta
type Story = StoryObj<typeof SpaAndWellnessCenterBanner>

export const Default: Story = {}
