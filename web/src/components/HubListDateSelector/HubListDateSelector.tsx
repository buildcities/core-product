// import { useState } from 'react'
import DaySelectionRow from '../bit.dev/day-selection-row'
import PublicHolidayToggleSwitch from '../bit.dev/public-holiday-toggle'

type HubListDateSelectorProps = {
  daysOfWeek: string[]
}
const HubListDateSelector = ({ daysOfWeek }: HubListDateSelectorProps) => {
  return (
    <div className="relative mb-8">
      <PublicHolidayToggleSwitch />
      {daysOfWeek.map((day, i) => (
        <DaySelectionRow day={day} key={i} />
      ))}
    </div>
  )
}

export default HubListDateSelector
