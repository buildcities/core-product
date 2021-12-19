import { Heading } from '@buildcities/build-ui.components.all'
import 'react-dates/initialize'
declare let window: any
import {
  DateRangePicker,
  OrientationShape,
  FocusedInputShape,
} from 'react-dates'
import { useEffect, useState } from 'react'
import * as moment from 'moment'
import 'react-dates/lib/css/_datepicker.css'

// Move to presets.ts in relevant folder later
const DATES_TEXT = 'Select dates'
const CHECK_IN_TEXT = 'Check in'
const CHECK_OUT_TEXT = 'Check out'

const ReservationDatePicker = () => {
  const [endDate, setEndDate] = useState<moment.Moment | null>(null)
  const [startDate, setStartDate] = useState<moment.Moment | null>(null)
  const [focus, setFocus] = useState<FocusedInputShape | null>(null)
  const [open, setOpen] = useState<boolean>(false)
  const [orientation, setOrientation] = useState<FocusedInputShape>(
    'horizontal' as FocusedInputShape
  )

  const handleDateChange = (startDate, endDate) => {
    setEndDate(endDate)
    setStartDate(startDate)
  }

  const applyStyles = () => {
    setOrientation(
      (isMobile() ? 'vertical' : 'horizontal') as FocusedInputShape
    )
  }

  const isMobile = () => {
    return window.innerWidth < 767
  }

  const getFocus = (focusedInput?: FocusedInputShape) => {
    if (!focusedInput && isMobile()) return
    else {
      setFocus(focusedInput)
    }
  }

  useEffect(() => {
    if (focus) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [focus])

  useEffect(() => {
    applyStyles()
    window.addEventListener('resize', () => applyStyles())
    return window.removeEventListener('resize', () => applyStyles())
  })

  return (
    <div className="relative mt-10 bg-background md:w-[654px] md:h-[453px] w-[316px] h-[796px]">
      <div
        className={`${
          open || isMobile()
            ? 'block pointer-events-auto'
            : 'hidden pointer-events-none'
        } absolute top-0 left-0 w-full h-full z-0 md:pt-10 md:px-8 p-4 border border-white`}
      >
        <Heading
          type="H3"
          className="text-mainText text-3xl font-bold"
          text={DATES_TEXT}
        />
        <p className=" text-paragraph text-sm">Pick dates for reserving hub.</p>
      </div>
      <div className="absolute flex md:w-80 md:h-20 w-64 h-16 md:top-8 md:right-8 md:left-auto top-24 left-4">
        <div className="w-1/2 h-full md:pl-4 md:pt-4 pl-2 pt-2 relative z-20 pointer-events-none">
          <span className="md:text-xl text-lg text-white font-fira">
            {CHECK_IN_TEXT}
          </span>
        </div>
        <div className="w-1/2 h-full md:pl-4 md:pt-4 pl-2 pt-2 relative z-20 pointer-events-none">
          <span className="md:text-xl text-lg text-white font-fira">
            {CHECK_OUT_TEXT}
          </span>
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
        focusedInput={focus}
        displayFormat={() => 'DD/MM/YYYY'}
        onFocusChange={(focusedInput) => getFocus(focusedInput)}
        orientation={orientation as OrientationShape}
      />
    </div>
  )
}

export default ReservationDatePicker
