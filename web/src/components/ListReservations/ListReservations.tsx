import ReservationSelectionButton from 'src/components/bit.dev/reservation-dashboard/reservation-selection-button'
import AcceptAllButton from 'src/components/bit.dev/reservation-dashboard/accept-all-button'
import {
  ADD_HUB_BUTTON_TEXT,
  RESERVATION_TITLE,
  WAITING_FOR_APPROVAL_TEXT,
  CURRENT_RESERVATIONS_TEXT,
  reservationsUnapprovedData,
} from './presets'
import { useState } from 'react'
import ReservationFilters from './components/reservation-filters'
import UnapprovedReservationsCell from 'src/components/UnapprovedReservationsCell'
import ApprovedReservationsCell from 'src/components/ApprovedReservationsCell'

const ViewReservationsPage = () => {
  const [selected, setSelected] = useState<string>('')
  return (
    <div>
      <div className="flex sm:justify-between justify-start mb-6">
        <ReservationFilters />
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
          {
            <h1 className="text-mainText font-sans font-medium lg:text-5xl text-2xl mb-2">
              {RESERVATION_TITLE}
            </h1>
          }
          {reservationsUnapprovedData.length && (
            <h2 className="text-paragraph font-sans font-medium lg:text-3xl text-xl lg:mb-14 mb-7">
              {WAITING_FOR_APPROVAL_TEXT}
            </h2>
          )}
        </div>
        <AcceptAllButton />
      </div>
      <UnapprovedReservationsCell />
      <>
        <h2 className="text-paragraph font-sans font-medium lg:text-3xl text-xl mb-2">
          {CURRENT_RESERVATIONS_TEXT}
        </h2>
        <ApprovedReservationsCell />
      </>
    </div>
  )
}

export default ViewReservationsPage
