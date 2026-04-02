import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import RoomsAndSuitesBanner from './RoomsAndSuitesBanner'

const meta: Meta<typeof RoomsAndSuitesBanner> = {
  title: 'RoomsAndSuites/RoomsAndSuitesBanner',
  component: RoomsAndSuitesBanner,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}

export default meta
type Story = StoryObj<typeof RoomsAndSuitesBanner>

export const Default: Story = {}
