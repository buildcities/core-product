/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import BookReservation from 'src/components/HubDetail/BookReservation/BookReservation'
import { getLocation } from 'src/utils/functions'
import { FIND_HUB_QUERY } from 'src/utils/graphql/queries/hubs'
import { useStore } from 'src/utils/stores/bookReservationStore'
import { Hub } from 'types/graphql'

export const QUERY = FIND_HUB_QUERY

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ hub }: CellSuccessProps<any>) => {
  const setSelectedHubDetails = useStore((s) => s.setSelectedHubDetails)
  const _location = getLocation(hub.location)
  setSelectedHubDetails({
    title: hub.name,
    location: _location,
    images: hub.images,
  })
  return (
    <BookReservation
      name={hub.name}
      location={_location}
      images={hub?.images as any}
      ownerId={hub?.ownerId}
      amenities={hub?.amenities}
    />
  )
}
