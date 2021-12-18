import { CHECK_IN_TEXT, CHECK_OUT_TEXT } from './presets'
export default function DateSection() {
  return (
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
  )
}
