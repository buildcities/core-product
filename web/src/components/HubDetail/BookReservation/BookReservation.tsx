/* eslint-disable react-hooks/exhaustive-deps */
import HubDetailContainer from '../common/components/HubDetailContainer/HubDetailContainer'
import ImageViewer from './components/image-viewer'
import Amenities from './components/amenities'
import { amenitiesProps } from 'src/components/ListHubs/ListHubsStep3/presets'
import AdminControls from 'src/components/AdminControls/AdminControls'

import { navigate, routes, useLocation, useParams } from '@redwoodjs/router'
import BookingWidget from 'src/components/BookingWidget/BookingWidget'
import { useEffect } from 'react'
import { useStore } from 'src/utils/stores/bookReservationStore'

export type BookReservationProps = {
  images?: { dataURL: string }[]
  name?: string
  location?: string
  ownerId?: string
  amenities?: amenitiesProps
  checkInDate?: moment.Moment | string | null
  checkOutDate?: moment.Moment | string | null
}

const BookReservation = ({
  images,
  name,
  ownerId,
  location,
  amenities,
  checkInDate,
  checkOutDate,
}: BookReservationProps) => {
  const { pathname } = useLocation()
  const setBookingDate = useStore((store) => store.setBookingDate)

  const bookingMode =
    pathname?.match('change-booking')?.length > 0 ? 'edit' : 'create'

  const { id: hubId } = useParams()

  const onEdit = () => {
    navigate(routes.editHub({ id: +hubId }))
  }
  useEffect(() => {
    if (bookingMode == 'edit' && checkOutDate && checkInDate) {
      setBookingDate(
        checkInDate as moment.Moment,
        checkOutDate as moment.Moment
      )
    } else {
      setBookingDate(null, null)
    }
    return () => {}
  }, [])

  return (
    <>
      <HubDetailContainer
        subTitle={location}
        title={name}
        renderRight={() => (
          <BookingWidget id={hubId} bookingMode={bookingMode} type="book" />
        )}
      >
        <div className="flex relative space-y-8 flex-col">
          <ImageViewer images={images} />
          <Amenities amenities={amenities} />
          <AdminControls
            onEdit={onEdit}
            ownerId={ownerId}
            className="absolute z-10 top-0"
          />
        </div>
      </HubDetailContainer>
    </>
  )
}

export default BookReservation
