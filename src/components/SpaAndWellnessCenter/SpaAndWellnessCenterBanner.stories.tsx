import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import SpaAndWellnessCenterBanner from './SpaAndWellnessCenterBanner'

const meta: Meta<typeof SpaAndWellnessCenterBanner> = {
  title: 'SpaAndWellness/SpaAndWellnessCenterBanner',
  component: SpaAndWellnessCenterBanner,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof SpaAndWellnessCenterBanner>

export const Default: Story = {}
