import SingleColumnLayout from 'src/layouts/SingleColumnLayout/SingleColumnLayout'
import MapPin from '../../utils/svgs/map-pin'
import TempImage from './temp.jpg'
import QRCode from './qr.png'
import { Button } from '@buildcities/build-ui.components.all'

// Move to presets.ts later
const HUB_NAME = 'Awesome place to stay'
const CHECK_IN_TEXT = 'Check in'
const CHECK_OUT_TEXT = 'Check out'

const ConfirmReservationPage = () => {
  return (
    <>
      <SingleColumnLayout metaTitle="Reservation Confirmation">
        <h1 className="text-white md:text-5xl text-3xl font-medium mb-4 font-sans">
          {HUB_NAME}
        </h1>
        <div className="flex mb-7">
          <MapPin className="mr-2" />
          <p className="text-paragraph text-sm">
            Los Angeles, Hidden Hills, Ultra Secret Location
          </p>
        </div>
        <div className="flex xl:flex-row flex-col">
          <div className="xl:w-max xl:mx-0 sm:w-full mx-auto rounded-lg overflow-hidden">
            {/* Image goes here */}
            <img
              src={TempImage}
              className="xl:h-full xl:w-auto w-full rounded-lg"
              alt={HUB_NAME}
            />
          </div>
          <div className="xl:w-[372px] w-full xl:ml-10 xl:mt-0 xl:mb-0 mt-4 mb-9 mx-auto text-white">
            {/* Section */}
            <div className="mb-6">
              <span className="block md:text-3xl text-2xl mb-4 font-sans font-medium">
                1. Dates
              </span>
              <div className="flex rounded-lg bg-cardBackground border border-gray-400 w-full md:h-28 h-14">
                <div className="md:p-4 pt-1 pl-4 border-r border-gray-400 w-1/2">
                  <span className="block md:text-2xl text-sm font-sans md:mb-2.5 md:font-normal font-bold">
                    {CHECK_IN_TEXT}
                  </span>
                  <span className="font-sans md:text-3xl text-sm md:font-bold">
                    10/10/22
                  </span>
                </div>
                <div className="md:p-4 pt-1 pl-4 w-1/2">
                  <span className="block md:text-2xl text-sm font-sans md:mb-2.5 md:font-normal font-bold">
                    {CHECK_OUT_TEXT}
                  </span>
                  <span className="font-sans md:text-3xl text-sm md:font-bold">
                    10/10/22
                  </span>
                </div>
              </div>
            </div>
            {/* Section */}
            <div className="mb-6">
              <span className="block md:text-3xl text-2xl mb-4 font-sans font-medium">
                2. Your QR code
              </span>
              <div className="rounded-lg bg-cardBackground p-3 flex items-center justify-center">
                <picture className="block w-[153px] h-[153px]">
                  <img src={QRCode} alt="QR code" className="w-full h-full" />
                </picture>
                <div className="ml-4 w-min">
                  <p className="mb-2 text-paragraph font-medium text-sm">
                    This code should be used as identifier, so keep it safe.
                  </p>
                  <button className="flex items-center justify-center rounded-lg border border-blue h-12 w-44 font-medium text-sm transition-colors duration-300 hover:bg-blue">
                    Download code
                  </button>
                </div>
              </div>
            </div>
            {/* Section */}
            <div className="mb-6">
              <span className="block md:text-3xl text-2xl font-sans font-medium text-paragraph">
                Leave note
              </span>
              <small className="text-sm text-paragraph font-medium">
                If you didn’t find right rules that suits you, feel free to type
                your own that build_citizens have to respect.
              </small>
              <textarea
                placeholder="Your note here"
                className="rounded-lg border-dashed border-2 border-gray-800 bg-cardBackground w-full h-24 p-4 mt-4 flex items-center text-paragraph"
              ></textarea>
            </div>
            <div className="flex">
              <Button text="Contact owner" style="secondary" />
              {/* Add in spacer as I can't edit the button styles
                  - adding margin breaks the borders */}
              <span className="w-10"></span>
              <Button text="Continue" style="primary" />
            </div>
          </div>
        </div>
      </SingleColumnLayout>
    </>
  )
}

export default ConfirmReservationPage
