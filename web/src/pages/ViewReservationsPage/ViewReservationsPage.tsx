import SingleColumnLayout from 'src/layouts/SingleColumnLayout/SingleColumnLayout'
import GrayButton from 'src/components/bit.dev/reservation-dashboard/gray-button'
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
        <div className="flex justify-between mb-6">
          <div className="flex mr-20">
            <GrayButton
              className="mr-7"
              selected={selected}
              setSelected={setSelected}
              text={RESERVATION_BUTTON_TEXT}
            />
            <GrayButton
              selected={selected}
              setSelected={setSelected}
              text={PROPERTIES_BUTTON_TEXT}
            />
          </div>
          <div>
            <GrayButton
              selected={selected}
              setSelected={setSelected}
              text={ADD_HUB_BUTTON_TEXT}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mr-20">
            <h1 className="text-mainText font-sans font-medium text-5xl mb-2">
              {RESERVATION_TITLE}
            </h1>
            <h2 className="text-paragraph font-sans font-medium text-3xl mb-14">
              {WAITING_FOR_APPROVAL_TEXT}
            </h2>
          </div>
          <AcceptAllButton />
        </div>
        <Reservations data={reservationsUnapprovedData} type="unapproved" />
        <h2 className="text-paragraph font-sans font-medium text-3xl mb-2">
          {CURRENT_RESERVATIONS_TEXT}
        </h2>
        <Reservations data={reservationsApprovedData} type="approved" />
      </SingleColumnLayout>
    </>
  )
}

export default ViewReservationsPage
