import SingleColumnLayout from 'src/layouts/SingleColumnLayout/SingleColumnLayout'
// import GrayButton from 'src/components/bit.dev/reservation-dashboard/gray-button'
import {
  // RESERVATION_BUTTON_TEXT,
  RESERVATION_TITLE,
  APPROVAL_TEXT,
  reservationData,
} from './presets'
import Reservations from 'src/components/ListReservations/ListReservations'

const ViewReservationsPage = () => {
  return (
    <>
      <SingleColumnLayout metaTitle="View All Reservations">
        <h1 className="text-mainText font-sans font-medium text-5xl mb-2">
          {RESERVATION_TITLE}
        </h1>
        <h2 className="text-paragraph font-sans font-medium text-3xl">
          {APPROVAL_TEXT}
        </h2>
        {/* <GrayButton>{RESERVATION_BUTTON_TEXT}</GrayButton> */}
        <Reservations data={reservationData} />
      </SingleColumnLayout>
    </>
  )
}

export default ViewReservationsPage
