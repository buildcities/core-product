import SingleColumnLayout from 'src/layouts/SingleColumnLayout/SingleColumnLayout'
import MapPin from '../../utils/svgs/map-pin'
import TempImage from './temp.jpg'
import QRCode from './qr.png'
import ContactOwnerButton from '../../components/bit.dev/contact-button'

// Move to presets.ts later
const HUB_NAME = 'Awesome place to stay'
const CHECK_IN_TEXT = 'Check in'
const CHECK_OUT_TEXT = 'Check out'

const ConfirmReservationPage = () => {
  return (
    <>
      <SingleColumnLayout metaTitle="Reservation Confirmation">
        <h1 className="text-white text-5xl font-medium mb-4 font-sans">
          {HUB_NAME}
        </h1>
        <div className="flex mb-7">
          <MapPin className="mr-2" />
          <p className="text-paragraph text-sm">
            Los Angeles, Hidden Hills, Ultra Secret Location
          </p>
        </div>
        <div className="flex">
          <div className="w-max rounded-lg overflow-hidden">
            {/* Image goes here */}
            <img src={TempImage} className="w-full h-full" alt={HUB_NAME} />
          </div>
          <div className="sm:w-[372px] ml-10 text-white">
            {/* Section */}
            <div className="mb-6">
              <span className="block text-3xl mb-4 font-sans font-medium">
                1. Dates
              </span>
              <div className="flex rounded-lg bg-cardBackground border border-gray-400 w-full h-28">
                <div className="p-4 border-r border-gray-400 w-1/2">
                  <span className="block text-2xl font-fira mb-2.5">
                    {CHECK_IN_TEXT}
                  </span>
                  <span className="font-sans text-3xl font-medium">
                    10/10/22
                  </span>
                </div>
                <div className="p-4 w-1/2">
                  <span className="block text-2xl font-fira mb-2.5">
                    {CHECK_OUT_TEXT}
                  </span>
                  <span className="font-sans text-3xl font-medium">
                    10/10/22
                  </span>
                </div>
              </div>
            </div>
            {/* Section */}
            <div className="mb-6">
              <span className="block text-3xl mb-4 font-sans font-medium">
                2. Your QR code
              </span>
              <div className="rounded-lg bg-cardBackground p-3 flex items-center">
                <picture className="block w-[153px] h-[153px]">
                  <img src={QRCode} alt="QR code" className="w-full h-full" />
                </picture>
                <div className="ml-4 w-min">
                  <p className="mb-2 text-paragraph font-medium text-sm">
                    This code should be used as identifier, so keep it safe.
                  </p>
                  <button className="flex items-center justify-center rounded-lg border border-blue h-12 w-44 font-medium text-sm">
                    Download code
                  </button>
                </div>
              </div>
            </div>
            {/* Section */}
            <div className="mb-6">
              <span className="block text-3xl font-sans font-medium text-paragraph">
                Leave note
              </span>
              <small className="text-sm text-paragraph font-medium">
                If you didn’t find right rules that suits you, feel free to type
                your own that build_citizens have to respect.
              </small>
              <textarea
                placeholder="Your note here"
                className="rounded-lg border-dotted border-gray-800 bg-cardBackground w-full h-24 p-4 mt-4 flex items-center text-paragraph"
              ></textarea>
            </div>

            <div className="flex">
              <ContactOwnerButton />
            </div>
          </div>
        </div>
      </SingleColumnLayout>
    </>
  )
}

export default ConfirmReservationPage
