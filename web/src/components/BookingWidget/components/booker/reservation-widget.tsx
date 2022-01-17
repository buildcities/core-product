import React, { useCallback, useState } from 'react'
import { RESERVE_TEXT, ADD_DATE_TEXT } from './presets'
import { Heading, Paragraph } from '@buildcities/build-ui.components.all'
import classNames from 'classnames'
import { useStore } from 'src/utils/stores/bookReservationStore'
import { CHECKIN_TEXT, CHECKOUT_TEXT, DATE_FORMAT } from '../preset'
import moment from 'moment'
import { DateRangePicker } from '@buildcities/build-ui.components.all'

type ReservatioWidgetProps = {
  className?: string
  onDateChange?: () => void
  onClick?: () => void
}

export default function ReservationWidget({
  className,
  onDateChange,
}: ReservatioWidgetProps) {
  const [hide, setHide] = useState(true)
  const _onClick = (event) => {
    const elem = event.target
    const pickerButton1 = document.getElementById('start-date')
    const pickerButton2 = document.getElementById('end-date')
    switch (elem) {
      case pickerButton1:
        setHide(false)
        break
      case pickerButton2:
        setHide(false)
        break
      default:
        setHide(true)
    }
  }
  return (
    <div
      className={classNames(
        `relative h-[182px] w-[340px] bg-cardBackground p-4 text-mainText rounded-md sm:rounded-lg ${
          hide ? 'z-0' : 'z-20'
        }`,
        className
      )}
    >
      <Heading text={RESERVE_TEXT} type="H3" />
      <div className="absolute -right-6 -top-2">
        <button onClick={_onClick}>
          <DateRangePicker onDateChange={onDateChange} />
        </button>
      </div>
    </div>
  )
}
