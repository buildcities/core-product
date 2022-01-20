import React, { useState } from 'react'
import { RESERVE_TEXT, ADD_DATE_TEXT } from './presets'
import { Heading, Paragraph } from '@buildcities/build-ui.components.all'
import classNames from 'classnames'
import { useStore } from 'src/utils/stores/bookReservationStore'
import { CHECKIN_TEXT, CHECKOUT_TEXT, DATE_FORMAT } from '../preset'
import moment from 'moment'
import { DateRangePicker } from '@buildcities/build-ui.components.all'

type ReservatioWidgetProps = {
  className?: string
  onDateChange?: (
    startDate: moment.Moment | null,
    endDate: moment.Moment | null
  ) => void
  onClick?: () => void
}

export default function ReservationWidget({
  className,
  onDateChange,
}: ReservatioWidgetProps) {
  const [hide, setHide] = useState(true)
  const { checkInDate, checkOutDate } = useStore((store) => ({ ...store }))

  const _onClick = (event) => {
    const elem = event.target
    const pickerButton1 = document.getElementById('start-date')
    const pickerButton2 = document.getElementById('end-date')
    const mobileButton = document.getElementById('open-mobile')
    switch (elem) {
      case pickerButton1:
        setHide(false)
        break
      case pickerButton2:
        setHide(false)
        break
      case mobileButton:
        setHide(false)
        break
      default:
        setHide(true)
    }
  }
  return (
    <div
      className={classNames(
        `relative h-[182px] w-[340px] lg:mx-0 mx-auto bg-cardBackground p-4 text-mainText rounded-md sm:rounded-lg ${
          hide ? 'z-0' : 'z-20'
        }`,
        className
      )}
    >
      <Heading text={RESERVE_TEXT} type="H3" />
      <div className="md:mt-0 md:absolute md:top-8 -right-6 -top-2 mt-2">
        <button onClick={_onClick}>
          <div
            id="open-mobile"
            className="md:hidden w-[310px] h-20 flex font-dmSans text-xl border border-[#343434] rounded-lg text-left"
          >
            <div className="h-full w-1/2 p-4 border-r border-r-[#343434] pointer-events-none">
              <Heading type="H5" text={CHECKIN_TEXT} />
              <Paragraph
                className="text-paragraph "
                text={
                  (checkInDate && moment(checkInDate).format(DATE_FORMAT)) ||
                  ADD_DATE_TEXT
                }
              />
            </div>
            <div className="h-full w-1/2 p-4 pointer-events-none">
              <Heading type="H5" text={CHECKOUT_TEXT} />
              <Paragraph
                className="text-paragraph"
                text={
                  (checkOutDate && moment(checkOutDate).format(DATE_FORMAT)) ||
                  ADD_DATE_TEXT
                }
              />
            </div>
          </div>
          <div
            className={`md:relative fixed md:top-1/2 lg:top-auto top-0 lg:left-auto left-1/2 lg:transform-none transform md:-translate-y-1/2 -translate-x-1/2 overflow-hidden ${
              hide ? 'md:block hidden' : 'block'
            }`}
          >
            <DateRangePicker
              onDateChange={onDateChange}
              hide={hide}
              setHide={setHide}
            />
          </div>
        </button>
      </div>
    </div>
  )
}
