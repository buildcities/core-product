// import { useState } from 'react'
import DaySelectionRow from '../bit.dev/day-selection-row'

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
    <div>
      {daysOfWeek.map((day, i) => (
        <DaySelectionRow day={day} key={i} />
      ))}
    </div>
  )
}

export default HubListDateSelector
