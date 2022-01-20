/* eslint-disable @typescript-eslint/no-explicit-any */
import { BookReservationProps } from 'src/components/HubDetail/BookReservation/BookReservation'
import { ReservationListItemProps } from 'src/components/ReservationListItem'
import { FindReservationQuery, Hub, Reservation } from 'types/graphql'

export const prepareHubForView = (hub: Hub) => ({
  id: hub.id,
  title: hub.name,
  subTitle: getLocation(hub.location),
  src: hub?.images?.[0]['dataURL'],
  ownerId: hub?.ownerId,
})

export const getUserId = (userMetaData: { user_metadata: { provider_id } }) => {
  return userMetaData?.user_metadata?.provider_id?.toString()
}

export const getLocation = ({
  city,
  country,
}: {
  city?: string
  country?: string
}) => {
  return `${city},${country}`
}

export const getImage: (images: { dataURL }[]) => string = (
  images: { dataURL }[]
) => {
  return images[0]['dataURL']
}

export const prepareReservationForView: (
  data: Reservation
) => ReservationListItemProps = (reservation) => {
  const {
    id,
    address,
    checkInDate,
    status,
    checkOutDate,
    owner: { userName: discordName, avatar },
  } = reservation
  return {
    id,
    address,
    status,
    checkInDate,
    checkOutDate,
    discordName,
    avatar: avatar,
  }
}

export const prepareChangeBookingForView: (
  data: FindReservationQuery
) => BookReservationProps = (data: FindReservationQuery) => {
  const {
    reservation: { checkInDate, checkOutDate, hub },
  } = data
  const { name, location, images, amenities, ownerId } = hub
  return {
    checkInDate,
    checkOutDate,
    name,
    images: images as any,
    location: getLocation(location),
    amenities,
    ownerId,
  }
}

export const prepareConfirmReservationForView = (
  data: FindReservationQuery
) => {
  const {
    reservation: { checkInDate, checkOutDate, id: code, hub },
  } = data
  const { location, name, images } = hub
  return {
    name: name,
    location: getLocation(location),
    image: getImage(images as any),
    images,
    checkInDate,
    checkOutDate,
    code,
  }
}
