/* eslint-disable @typescript-eslint/no-explicit-any */
import type { CellFailureProps } from '@redwoodjs/web'
import { prepareChangeBookingForView } from 'src/utils/functions'
import { FIND_RESERVATION_QUERY } from 'src/utils/graphql/queries/reservations'
import { useStore } from 'src/utils/stores/bookReservationStore'
import { FindReservationQuery } from 'types/graphql'
import BookReservation, {
  BookReservationProps,
} from '../HubDetail/BookReservation/BookReservation'

export const QUERY = FIND_RESERVATION_QUERY

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)
export const afterQuery = (data: FindReservationQuery) => {
  const changeBookingProps = prepareChangeBookingForView(data)
  return changeBookingProps
}

export const Success = (changeBookingProps: BookReservationProps) => {
  const setSelectedHubDetails = useStore((s) => s.setSelectedHubDetails)
  setSelectedHubDetails({
    title: changeBookingProps.name,
    location: changeBookingProps.location,
    images: changeBookingProps.images,
    ownerId: changeBookingProps.ownerId,
  })
  return <BookReservation {...changeBookingProps} />
}
