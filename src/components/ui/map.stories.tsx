import type { Meta, StoryObj } from '@storybook/react-vite'
import { Map, MapMarker, MarkerContent } from './map'

const meta: Meta<typeof Map> = {
  title: 'UI/Map',
  component: Map,
  tags: ['autodocs'],
  args: {
    latitude: 20.6276,
    longitude: 96.5658,
    zoom: 13,
    style: { height: '400px', width: '100%', borderRadius: '10px' },
  },
}

export default meta
type Story = StoryObj<typeof Map>

export const Default: Story = {
  render: (args) => (
    <Map {...args}>
      <MapMarker latitude={20.6276} longitude={96.5658}>
        <MarkerContent title="The Evergreen Hill" description="Your serene sanctuary in Kalaw." />
      </MapMarker>
    </Map>
  ),
}

export const ZoomedOut: Story = {
  args: {
    zoom: 8,
  },
}
