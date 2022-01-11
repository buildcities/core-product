// import { useState } from 'react'
import DaySelectionRow from './components/day-selection-row'

type HubListDateSelectorProps = {
  daysOfWeek?: string[]
}
const HubListDateSelector = ({ daysOfWeek }: HubListDateSelectorProps) => {
  return (
    <div className=" mb-8 space-y-6">
      {daysOfWeek.map((day, i) => (
        <DaySelectionRow day={day} key={i} />
      ))}
    </div>
  )
}

export default HubListDateSelector
