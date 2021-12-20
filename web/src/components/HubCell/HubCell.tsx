import type { FindHubQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindHubQuery($id: Int!) {
    hub: hub(id: $id) {
      id
      amenities
      location
      images
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ hub }: CellSuccessProps<FindHubQuery>) => {
  return <div>{JSON.stringify(hub)}</div>
}
