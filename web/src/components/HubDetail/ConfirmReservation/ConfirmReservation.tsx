/* eslint-disable react-hooks/exhaustive-deps */
import SplitContainer from 'src/components/SplitContainer/SplitContainer'
import { HubImage } from './components'
import { Redirect, routes } from '@redwoodjs/router'
import BookingWidget from 'src/components/BookingWidget/BookingWidget'
import { useEffect } from 'react'
import { useStore } from 'src/utils/stores/bookReservationStore'

export type ConfirmReservationProps = {
  name?: string
  location?: string
  image?: string
  images?: { dataURL: string }[]
  code?: string
  checkInDate?: moment.Moment | null
  checkOutDate?: moment.Moment | null
}

const ConfirmReservation = ({
  name,
  location,
  image,
  code,
  checkInDate,
  checkOutDate,
}: ConfirmReservationProps) => {
  const setBookingDate = useStore((store) => store.setBookingDate)
  useEffect(() => {
    setBookingDate(checkInDate, checkOutDate)
    return () => {
      //do clean up here
    }
  }, [])

  return code ? (
    <SplitContainer
      subTitle={location}
      title={name}
      renderRight={() => <BookingWidget id={code} type="confirm" />}
    >
      <HubImage altText={name || name} hubImage={image} />
    </SplitContainer>
  ) : (
    <Redirect to={routes.viewHubs()} />
  )
}

ConfirmReservation.defaultProps = {
  code: 'test code',
}

export default ConfirmReservation
