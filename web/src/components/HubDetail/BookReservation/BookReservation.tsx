import { useState } from 'react'
import HubDetailContainer from '../common/components/HubDetailContainer/HubDetailContainer'
import ImageViewer from './components/image-viewer'
import ReservatioWidget from './components/reservation-widget'
import ReservationDatePicker from './components/ReservationDatePicker/ReservationDatePicker'
import { useStore } from 'src/utils/stores/bookReservationStore'
type BookReservationProps = {
  images: { dataURL: string }[]
  name?: string
  location?: string
}

const BookReservation = ({ images, name, location }: BookReservationProps) => {
  const setBookingDate = useStore((store) => store.setBookingDate)
  const [hide, setHide] = useState(true)
  const onClick = () => {
    setHide(false)
  }

  const handleFocus = (focus: boolean) => {
    !focus && setHide(true)
  }
  return (
    <HubDetailContainer
      subTitle={location}
      title={name}
      renderRight={() => (
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
      )}
    >
      <ImageViewer images={images} />
    </HubDetailContainer>
  )
}

export default BookReservation
