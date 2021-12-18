import { CHECK_IN_TEXT, CHECK_OUT_TEXT } from './presets'
import { EditPencil } from 'src/utils/svgs'

export default function DateSection() {
  return (
    <div className="mb-6">
      <div className="flex md:items-center items-end md:mb-4 mb-2">
        <span className="block md:text-3xl text-2xl font-sans font-medium">
          1. Dates
        </span>
        <button className="cursor-pointer">
          <EditPencil className="md:w-6 md:h-6 md:ml-6 md:mb-0 ml-2.5 mb-1 w-4 h-4" />
        </button>
      </div>
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
