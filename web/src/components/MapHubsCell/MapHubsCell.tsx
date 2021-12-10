import type { MapHubsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { MapView } from 'src/components/bit.dev/map-view'
import { prepareMockData } from 'src/components/bit.dev/.mock'

export const QUERY = gql`
  query MapHubsQuery {
    hubs {
      id
      location
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ hubs }: CellSuccessProps<MapHubsQuery>) => {
  return (
    <MapView
      data={prepareMockData()}
      apiKey={process.env.G_PLACES_API_KEY}
    ></MapView>
  )
}
