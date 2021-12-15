// import { useState } from 'react'
import DaySelectionRow from '../bit.dev/day-selection-row'
import PublicHolidayToggleSwitch from '../bit.dev/public-holiday-toggle'

const HubListDateSelector = () => {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

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
