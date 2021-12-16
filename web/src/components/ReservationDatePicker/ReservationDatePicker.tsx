import { Heading } from '@buildcities/build-ui.components.all'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import { useEffect, useState } from 'react'

import 'react-dates/lib/css/_datepicker.css'

// Move to presets.ts in relevant folder later
const DATES_TEXT = 'Select dates'
const CHECK_IN_TEXT = 'Check in'
const CHECK_OUT_TEXT = 'Check out'

const ReservationDatePicker = () => {
  const [endDate, setEndDate] = useState()
  const [startDate, setStartDate] = useState()
  const [focus, setFocus] = useState(null)
  const [open, setOpen] = useState(null)

  // Tried logging these variables, they only appear as objects
  // not too sure of what type they are
  const handleDateChange = (startDate, endDate) => {
    setEndDate(endDate)
    setStartDate(startDate)
  }

  useEffect(() => {
    if (focus) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [focus])

  return (
    <div className="relative mt-10 bg-background w-[654px] h-[453px]">
      <div
        className={`${
          open ? 'block pointer-events-auto' : 'hidden pointer-events-none'
        } absolute top-0 left-0 w-full h-full z-0 pt-10 px-8 border border-white`}
      >
        <Heading
          type="H3"
          className="text-mainText text-3xl font-bold"
          text={DATES_TEXT}
        />
        <p className=" text-paragraph text-sm">Pick dates for reserving hub.</p>
      </div>
      <div className="absolute flex w-80 h-20 top-8 right-8">
        <div className="w-1/2 h-full p-4 relative z-20 pointer-events-none">
          <span className="text-xl text-white font-fira">{CHECK_IN_TEXT}</span>
        </div>
        <div className="w-1/2 h-full p-4 relative z-20 pointer-events-none">
          <span className="text-xl text-white font-fira">{CHECK_OUT_TEXT}</span>
        </div>
      </div>
      <DateRangePicker
        startDate={startDate}
        startDateId="start-date"
        endDate={endDate}
        endDateId="end-date"
        onDatesChange={({ startDate, endDate }) =>
          handleDateChange(startDate, endDate)
        }
        monthFormat="D MMMM YYYY"
        focusedInput={focus}
        displayFormat={() => 'DD/MM/YYYY'}
        onFocusChange={(focus: string) => setFocus(focus)}
      />
    </div>
  )
}

export default ReservationDatePicker
