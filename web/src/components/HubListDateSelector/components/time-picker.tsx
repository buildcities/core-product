import { Button, Heading } from '@buildcities/build-ui.components.all'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid'
import SlideOver from 'src/components/bit.dev/slide-over'
import { defaultAvailability, formatTime } from './presets'

import { useState } from 'react'
import { useWatch } from '@redwoodjs/forms'
import { TimeSelector } from './time-selector'

type TimePickerProps = {
  day: string
}

const ChevronIndicator = () => (
  <div className="flex flex-col justify-center ml-2 h-full">
    <ChevronUpIcon className="w-4 h-4 group-hover:text-selected " />
    <ChevronDownIcon className="w-4 h-4 group-hover:text-selected" />
  </div>
)

export default function TimePicker({ day }: TimePickerProps) {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const availability = useWatch(defaultAvailability(day))
  return (
    <>
      <div className="flex  flex-grow justify-between lg:max-w-[230px] max-w-[180px] sm:max-w-[200px]  text-mainText items-center">
        <button
          type="button"
          className="bg-cardBackground text-xs sm:text-sm group lg:H5 flex-grow rounded-lg p-1 lg:px-3 lg:py-2"
          onClick={() => setOpen(true)}
        >
          <div className="flex px-1 lg:p-0  flex-1 justify-between items-center">
            {formatTime(availability[day]?.from?.hours, '0', 1)}:
            {formatTime(availability[day]?.from?.minutes)}{' '}
            {formatTime(availability[day]?.from?.period, 'AM')} -{' '}
            {formatTime(availability[day]?.to?.hours, '0', 1)}:
            {formatTime(availability[day]?.to?.minutes)}{' '}
            {formatTime(availability[day]?.to?.period, 'PM')}
            <ChevronIndicator />
          </div>
        </button>
      </div>
      <SlideOver setOpen={setOpen} open={open} title={day}>
        <div className="max-w-xs">
          <Heading type="H5" text="From" />
          <TimeSelector rootName={`${day}.from`} />
          <Heading type="H5" text="To" />
          <TimeSelector rootName={`${day}.to`} />
          <div className="mt-4 ">
            <Button onClick={handleClose} type="button" text="Add date" />
          </div>
        </div>
      </SlideOver>
    </>
  )
}
