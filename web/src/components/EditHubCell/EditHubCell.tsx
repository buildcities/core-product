/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FindHubQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { FIND_HUB_QUERY } from 'src/utils/graphql/queries/hubs'
import EditHub from 'src/components/EditHub/EditHub'

export const QUERY = FIND_HUB_QUERY

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ hub }: CellSuccessProps<FindHubQuery>) => {
  return <EditHub data={hub as any} />
}
