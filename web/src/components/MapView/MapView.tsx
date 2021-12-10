import { MapView as MapViewComponent } from 'src/components/bit.dev/map-view'
import { prepareMockData } from '../bit.dev/.mock'
/* todo: import data from db with graphql filter  with store state  */
const MapView = () => {
  return (
    <MapViewComponent
      data={prepareMockData()}
      apiKey={process.env.G_PLACES_API_KEY}
    />
  )
}

export default MapView
