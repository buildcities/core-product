import type { ReservationsQuery } from 'types/graphql'
import type { CellFailureProps } from '@redwoodjs/web'
import { RESERVATIONS_QUERY } from 'src/utils/graphql/queries/reservations'
import ReservationTable from 'src/components/ReservationTable/ReservationTable'
import { prepareReservationForView } from 'src/utils/functions'
import { ReservationListingProps } from '../ReservationTable/components/reservation-listing'

export const QUERY = RESERVATIONS_QUERY

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const beforeQuery = ({
  isOwner,
  skip,
  take,
}: {
  isOwner?: boolean
  skip?: number
  take?: number
}) => {
  const filter = { status: 'APPROVED' }
  return {
    variables: { filter, skip, take, isOwner },
  }
}

export const afterQuery = (data: ReservationsQuery) => {
  const reservations = data.reservations.map(prepareReservationForView)
  return { reservations }
}

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  reservations,
}: {
  reservations: ReservationListingProps[]
}) => {
  return <ReservationTable data={reservations} type="approved" />
}
