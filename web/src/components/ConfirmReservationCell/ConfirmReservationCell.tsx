import type { FindReservationQuery } from 'types/graphql'
import type { CellFailureProps } from '@redwoodjs/web'
import { FIND_RESERVATION_QUERY } from 'src/utils/graphql/queries/reservations'
import ConfirmReservation, {
  ConfirmReservationProps,
} from '../HubDetail/ConfirmReservation/ConfirmReservation'
import { prepareConfirmReservationForView } from 'src/utils/functions'

export const QUERY = FIND_RESERVATION_QUERY

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const afterQuery = (data: FindReservationQuery) => {
  return prepareConfirmReservationForView(data)
}

export const Success = (reservation: ConfirmReservationProps) => {
  return <ConfirmReservation {...reservation} />
}
