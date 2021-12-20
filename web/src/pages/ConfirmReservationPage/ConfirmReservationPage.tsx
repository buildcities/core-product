import TempImage from './temp.jpg'
import {
  HubImage,
  DateSection,
  QRCodeSection,
  LeaveNoteSection,
} from './components'

import { HUB_NAME } from './presets'
import DetailViewLayout from 'src/layouts/DetailViewLayout/DetailViewLayout'

const ConfirmReservationPage = () => {
  return (
    <DetailViewLayout
      metaTitle="Reservation Confirmation"
      renderRight={() => (
        <>
          <DateSection checkInDate="" checkOutDate="" />
          <QRCodeSection code="test code" />
          <LeaveNoteSection />
        </>
      )}
    >
      <HubImage hubImage={TempImage} altText={HUB_NAME} />
    </DetailViewLayout>
  )
}

export default ConfirmReservationPage
//xl:w-[372px] lg:w-[400px]  w-full xl:ml-10 xl:mt-0 xl:mb-0 mt-4 mb-9 mx-auto text-white"
/* <SingleColumnLayout metaTitle="Reservation Confirmation">
      <HubDetails
        type="H1"
        className="lg:block hidden  text-mainText"
        name={HUB_NAME}
        location={HUB_LOCATION}
      />
      <div className="flex flex-shrink flex-col lg:flex-row lg:justify-end lg:space-x-10 text-mainText">
        <div>
          <HubDetails
            type="H2"
            className="lg:hidden"
            name={HUB_NAME}
            location={HUB_LOCATION}
          />

        </div>
        <div className="flex-shrink lg:max-w-[372px] mt-4 lg:mt-0 ">

        </div>
      </div>
    </SingleColumnLayout> */
