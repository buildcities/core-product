import type { FindReservationQuery } from 'types/graphql'
import type { CellFailureProps } from '@redwoodjs/web'
import { FIND_RESERVATION_QUERY } from 'src/utils/graphql/queries/reservations'
import ConfirmReservation, {
  ConfirmReservationProps,
} from '../HubDetail/ConfirmReservation/ConfirmReservation'
import { prepareConfirmReservationForView } from 'src/utils/functions'
import { useStore } from 'src/utils/stores/bookReservationStore'

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
  const setSelectedHubDetails = useStore((s) => s.setSelectedHubDetails)
  setSelectedHubDetails({
    title: reservation.name,
    location: reservation.location,
    images: reservation.images,
  })

  return <ConfirmReservation {...reservation} />
}

