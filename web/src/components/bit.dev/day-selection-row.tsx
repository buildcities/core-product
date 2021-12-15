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
    <div className="flex items-center w-full mb-4">
      <span className="text-lg font-bold text-[#969696] w-32 mr-3">{day}</span>
      <ToggleSwitch day={day} setClosed={setClosed} closed={closed} />
      <div
        className={`${
          closed
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        } flex items-center text-xl text-white transition-opacity duration-300`}
      >
        <TimePicker day={day} />
        <Checkbox day={day} />
      </div>
    </div>
  )
}

export default DaySelectionRow
