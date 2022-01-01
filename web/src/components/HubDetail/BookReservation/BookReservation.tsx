/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from 'react'
import HubDetailContainer from '../common/components/HubDetailContainer/HubDetailContainer'
import ImageViewer from './components/image-viewer'
import ReservatioWidget from './components/reservation-widget'
import OwnerScoreWidget from './components/owner-score'
import ReservationDatePicker from './components/ReservationDatePicker/ReservationDatePicker'
import { useStore } from 'src/utils/stores/bookReservationStore'
import Amenities from './components/amenities'
import { amenitiesProps } from 'src/components/ListHubs/ListHubsStep3/presets'
import { navigate, routes } from '@redwoodjs/router'
import AdminControls from 'src/components/AdminControls/AdminControls'

type BookReservationProps = {
  images: { dataURL: string }[]
  name?: string
  location?: string
  ownerId?: string
  amenities?: amenitiesProps
}

const BookReservation = ({
  images,
  name,
  ownerId,
  location,
  amenities,
}: BookReservationProps) => {
  const { setBookingDate, checkInDate, checkOutDate } = useStore((store) => ({
    ...store,
  }))
  const [hide, setHide] = useState(true)

  const onClick = () => {
    setHide(false)
  }

  const handleFocus = useCallback(
    (focus: boolean) => {
      if (!focus && !hide) {
        setHide(true)
        checkInDate && checkOutDate && navigate(routes.confirmReservation())
      }
    },
    [hide]
  )

  return (
    <>
      <HubDetailContainer
        subTitle={location}
        title={name}
        renderRight={() => (
          <div className="space-y-[17px]">
            <div className="relative">
              <ReservatioWidget onClick={onClick} />
              <div className="absolute right-6 top-6">
                <ReservationDatePicker
                  onDateChange={setBookingDate}
                  onFocus={handleFocus}
                  hide={hide}
                />
              </div>
            </div>
            <OwnerScoreWidget />
          </div>
        )}
      >
        <div className="flex relative space-y-8 flex-col">
          <AdminControls ownerId={ownerId} className="absolute z-10 top-10" />
          <ImageViewer images={images} />
          <Amenities amenities={amenities} />
        </div>
      </HubDetailContainer>
    </>
  )
}

export default BookReservation
