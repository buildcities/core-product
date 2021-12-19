import SingleColumnLayout from 'src/layouts/SingleColumnLayout/SingleColumnLayout'
import TempImage from './temp.jpg'
import QRCodeImage from './qr.png'
import HubDetails from '../../components/bit.dev/reservation-page/hub-details'
import HubImage from '../../components/bit.dev/reservation-page/hub-image'
import DateSection from '../../components/bit.dev/reservation-page/date-section'
import QRCodeSection from '../../components/bit.dev/reservation-page/qrcode-section'
import LeaveNoteSection from '../../components/bit.dev/reservation-page/note-section'
import ReservationButtons from '../../components/bit.dev/reservation-page/reservation-buttons'

import { HUB_NAME, HUB_LOCATION } from './presets'

const ConfirmReservationPage = () => {
  return (
    <>
      <SingleColumnLayout metaTitle="Reservation Confirmation">
        <HubDetails name={HUB_NAME} location={HUB_LOCATION} />
        <div className="flex xl:flex-row flex-col">
          <HubImage hubImage={TempImage} altText={HUB_NAME} />
          <div className="xl:w-[372px] w-full xl:ml-10 xl:mt-0 xl:mb-0 mt-4 mb-9 mx-auto text-white">
            <DateSection />
            <QRCodeSection codeImage={QRCodeImage} />
            <LeaveNoteSection />
            <ReservationButtons />
          </div>
        </div>
      </SingleColumnLayout>
    </>
  )
}

export default ConfirmReservationPage
