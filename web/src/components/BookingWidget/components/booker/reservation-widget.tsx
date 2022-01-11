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
  onClick,
  onDateChange,
}: ReservatioWidgetProps) {
  const { checkInDate, checkOutDate } = useStore((store) => ({ ...store }))
  const [hide, setHide] = useState(true)
  const _onClick = () => {
    setHide(false)
    onClick && onClick()
  }

  const handleFocus = useCallback(
    (focus: boolean) => {
      if (!focus && !hide) {
        //console.log('we are here')
        setHide(true)
      }
    },
    [hide]
  )

  return (
    <div
      className={classNames(
        'relative h-[182px]  bg-cardBackground flex-grow flex-shrink-0 p-4 text-mainText rounded-md sm:rounded-lg ',
        className
      )}
    >
      <Heading text={RESERVE_TEXT} type="H3" />
      <button
        onClick={_onClick}
        className="flex w-full text-left justify-evenly border  mt-3 px-[18px] rounded-lg divide-x divide-[#343434] border-[#343434]"
      >
        <div className="flex-shrink-0  py-4   mr-4 sm:mr-8 flex-1">
          <Heading type="H5" text={CHECKIN_TEXT} />
          <Paragraph
            className="text-paragraph "
            text={
              (checkInDate && moment(checkInDate).format(DATE_FORMAT)) ||
              ADD_DATE_TEXT
            }
          />
        </div>
        <div className="flex-shrink-0 pl-4  py-4 mr-2 ">
          <Heading type="H5" text={CHECKOUT_TEXT} />
          <Paragraph
            className="text-paragraph"
            text={
              (checkOutDate && moment(checkOutDate).format(DATE_FORMAT)) ||
              ADD_DATE_TEXT
            }
          />
        </div>
      </button>
      <div className="absolute right-6 top-6">
        <DateRangePicker
          onDateChange={onDateChange}
          onFocus={handleFocus}
          hide={hide}
        />
      </div>
    </div>
  )
}
