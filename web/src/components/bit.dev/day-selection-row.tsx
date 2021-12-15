import { useState } from 'react'
import ToggleSwitch from '../bit.dev/toggle-switch'
import TimePicker from '../bit.dev/time-picker'
import Checkbox from '../bit.dev/checkbox'

type DaySelectionRowProps = {
  day?: string
}
const DaySelectionRow = ({ day }: DaySelectionRowProps) => {
  const [closed, setClosed] = useState(false)
  return (
    <div className="flex items-center w-full 2xl:mb-4 mb-8 2xl:flex-nowrap flex-wrap">
      <span className="text-lg font-bold text-[#969696] w-32 mr-3">{day}</span>
      <ToggleSwitch day={day} setClosed={setClosed} closed={closed} />
      <div
        className={`${
          closed
            ? 'opacity-100 pointer-events-auto 2xl:h-auto h-20'
            : 'opacity-0 pointer-events-none 2xl:h-auto h-0'
        } flex items-center text-xl text-white transition-all duration-300`}
      >
        <div className="2xl:w-auto 2xl:mt-0 mt-4 flex sm:flex-row flex-col sm:items-center items-start w-screen">
          <TimePicker day={day} />
          <Checkbox day={day} />
        </div>
      </div>
    </div>
  )
}

export default DaySelectionRow
