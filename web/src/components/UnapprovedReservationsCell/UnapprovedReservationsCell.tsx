import type { ReservationsQuery } from 'types/graphql'
import type { CellFailureProps } from '@redwoodjs/web'
import { RESERVATIONS_QUERY } from 'src/utils/graphql/queries/reservations'
import { prepareReservationForView } from 'src/utils/functions'
import ReservationTable from '../ReservationTable/ReservationTable'
import { ReservationListItemProps } from 'src/components/ReservationListItem'

export const QUERY = RESERVATIONS_QUERY

export const Loading = () => <div>Loading...</div>

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const afterQuery = (data: ReservationsQuery) => {
  const reservations = data.reservations.map(prepareReservationForView)
  return { reservations }
}

export const beforeQuery = ({
  isOwner,
  skip,
  take,
}: {
  isOwner?: boolean
  skip?: number
  take?: number
}) => {
  const filter = { OR: [{ status: 'NEW' }, { status: 'REJECTED' }] }
  console.log(isOwner)
  return {
    variables: { filter, skip, take, isOwner },
  }
}

export const Success = ({
  reservations,
}: {
  reservations: ReservationListItemProps[]
}) => {
  //console.log(reservations)
  return <ReservationTable data={reservations} type="unapproved" />
}
