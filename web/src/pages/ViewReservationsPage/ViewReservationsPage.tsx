import SingleColumnLayout from 'src/layouts/SingleColumnLayout/SingleColumnLayout'
import ReservationSelectionButton from 'src/components/bit.dev/reservation-dashboard/reservation-selection-button'
import AcceptAllButton from 'src/components/bit.dev/reservation-dashboard/accept-all-button'
import {
  RESERVATION_BUTTON_TEXT,
  PROPERTIES_BUTTON_TEXT,
  ADD_HUB_BUTTON_TEXT,
  RESERVATION_TITLE,
  WAITING_FOR_APPROVAL_TEXT,
  CURRENT_RESERVATIONS_TEXT,
  reservationsUnapprovedData,
  reservationsApprovedData,
} from './presets'
import Reservations from 'src/components/ListReservations/ListReservations'
import { useEffect, useState } from 'react'

const ViewReservationsPage = () => {
  const [selected, setSelected] = useState<string>('')
  useEffect(() => {
    setSelected(RESERVATION_BUTTON_TEXT)
  }, [])
  return (
    <>
      <SingleColumnLayout metaTitle="View all reservations">
        <div className="flex sm:justify-between justify-start mb-6">
          <div className="flex">
            <ReservationSelectionButton
              className="sm:mr-7 mr-4"
              selected={selected}
              setSelected={setSelected}
              text={RESERVATION_BUTTON_TEXT}
            />
            <ReservationSelectionButton
              className="sm:mr-7 mr-4"
              selected={selected}
              setSelected={setSelected}
              text={PROPERTIES_BUTTON_TEXT}
            />
          </div>
          <div>
            <ReservationSelectionButton
              selected={selected}
              setSelected={setSelected}
              text={ADD_HUB_BUTTON_TEXT}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mr-10">
            <h1 className="text-mainText font-sans font-medium lg:text-5xl text-2xl mb-2">
              {RESERVATION_TITLE}
            </h1>
            {reservationsUnapprovedData.length && (
              <h2 className="text-paragraph font-sans font-medium lg:text-3xl text-xl lg:mb-14 mb-7">
                {WAITING_FOR_APPROVAL_TEXT}
              </h2>
            )}
          </div>
          <AcceptAllButton />
        </div>
        {reservationsUnapprovedData.length && (
          <Reservations data={reservationsUnapprovedData} type="unapproved" />
        )}
        {reservationsApprovedData.length && (
          <>
            <h2 className="text-paragraph font-sans font-medium lg:text-3xl text-xl mb-2">
              {CURRENT_RESERVATIONS_TEXT}
            </h2>
            <Reservations data={reservationsApprovedData} type="approved" />
          </>
        )}
      </SingleColumnLayout>
    </>
  )
}

export default ViewReservationsPage
