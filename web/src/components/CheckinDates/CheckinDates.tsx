import { CHECK_IN_TEXT, CHECK_OUT_TEXT } from './presets'

const CheckinDates = () => {
  return (
    <div className="mb-6">
      <div className="flex md:items-center items-end md:mb-2 mb-1"></div>
      <div className="flex rounded-lg bg-cardBackground border border-gray-400 w-full md:h-28 h-12">
        <div className="md:p-4 pt-1 border-r border-gray-400 w-1/2">
          <span className="block md:text-2xl text-sm font-sans md:mb-2.5 md:font-normal font-bold">
            {CHECK_IN_TEXT}
          </span>
          <span className="font-sans md:text-3xl text-sm md:font-bold">
            10/10/22
          </span>
        </div>
        <div className="md:p-4 pt-1">
          <span className="block md:text-2xl text-sm font-sans md:mb-2.5 md:font-normal font-bold">
            {CHECK_OUT_TEXT}
          </span>
          <span className="font-sans md:text-3xl text-sm md:font-bold">
            10/10/22
          </span>
        </div>
      </div>
    </div>
  )
}

export default CheckinDates
