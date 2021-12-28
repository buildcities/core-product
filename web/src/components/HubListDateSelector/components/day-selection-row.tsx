import { useState } from 'react'
import ToggleSwitch from './toggle-switch'
import TimePicker from './time-picker'
import TwentyFourHRSelector from './checkbox'

type DaySelectionRowProps = {
  day?: string
}

/* w-full xl:mb-4 mb-8 2xl:flex-nowrap flex-wrap */
const DaySelectionRow = ({ day }: DaySelectionRowProps) => {
  const [closed, setClosed] = useState(false)
  return (
    <div className=" justify-between text-mainText items-center space-x-3 flex">
      <div className=" flex space-x-4">
        <div className="w-12 md:w-24 font-dmSans font-bold text-lg leading-[28.64px] flex-shrink-0">
          <span className="hidden md:block">{day}</span>
          <span className="block md:hidden">{day.substring(0, 3)}</span>
        </div>
        <ToggleSwitch day={day} setClosed={setClosed} closed={closed} />
      </div>
      <div
        className={`${
          closed
            ? 'opacity-100 pointer-events-auto 2xl:h-auto h-12'
            : 'opacity-0 pointer-events-none 2xl:h-auto h-0'
        } flex items-center space-x-4 transition-all duration-300`}
      >
        <TimePicker day={day} />
        <TwentyFourHRSelector day={day} />
      </div>
    </div>
  )
}

export default DaySelectionRow
/* <div className="flex items-center w-full flex-1 ">
      <span className="text-lg font-bold text-paragraph w-32 mr-3">{day}</span>
      <ToggleSwitch day={day} setClosed={setClosed} closed={closed} />
      <div
        className={`${
          closed
            ? 'opacity-100 pointer-events-auto 2xl:h-auto h-20'
            : 'opacity-0 pointer-events-none 2xl:h-auto h-0'
        } flex items-center text-xl text-mainText transition-all duration-300`}
      >
        <div className="2xl:w-auto 2xl:mt-0 mt-4 flex sm:flex-row flex-col sm:items-center items-start w-screen">
          <TimePicker day={day} />
        </div>
      </div>
    </div> */
