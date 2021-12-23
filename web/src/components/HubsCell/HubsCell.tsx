import type { HubsQuery } from 'types/graphql'

import type { CellFailureProps } from '@redwoodjs/web'
import Hubs from 'src/components/Hubs/Hubs'
import { prepareHubForView } from 'src/utils/functions'
import { HUBS_QUERY } from 'src/utils/graphql/queries/hubs'

export const QUERY = HUBS_QUERY

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)
export const afterQuery = (data: HubsQuery) => {
  const hubs = data.hubs.map(prepareHubForView)
  return { hubs }
}

export const beforeQuery = ({
  filter,
  skip,
  take,
}: {
  filter?: string
  skip?: number
  take?: number
}) => {
  return {
    variables: { filter, skip, take },
  }
}

export const Success = ({ hubs }) => {
  return <Hubs hubs={hubs} />
}
