import type { HubsQuery } from 'types/graphql'

import type { CellFailureProps } from '@redwoodjs/web'
import Hubs from 'src/components/Hubs/Hubs'
import { prepareHubForView } from 'src/utils/functions'

export const QUERY = gql`
  query HubsQuery {
    hubs {
      id
      location
      name
      images
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)
export const afterQuery = (data: HubsQuery) => {
  const hubs = data.hubs.map(prepareHubForView)
  return { hubs }
}

export const Success = ({ hubs }) => {
  return <Hubs hubs={hubs} />
}
