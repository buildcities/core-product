import React from 'react'
import { RESERVE_TEXT } from './presets'
import { Heading, Paragraph } from '@buildcities/build-ui.components.all'
import { ADD_DATE_TEXT } from './presets'
import classNames from 'classnames'
import { useStore } from 'src/utils/stores/bookReservationStore'
import { CHECKIN_TEXT, CHECKOUT_TEXT, DATE_FORMAT } from '../../common/preset'

type ReservatioWidgetProps = {
  className?: string
  onClick?: () => void
}

export default function ReservationWidget({
  className,
  onClick,
}: ReservatioWidgetProps) {
  const { checkInDate, checkOutDate } = useStore((store) => ({ ...store }))

  return (
    <div
      className={classNames(
        'h-[182px]  bg-cardBackground flex-grow flex-shrink-0 p-6 text-mainText rounded-md sm:rounded-lg ',
        className
      )}
    >
      <Heading text={RESERVE_TEXT} type="H3" />
      <button
        onClick={onClick}
        className="flex w-full text-left justify-evenly border  mt-6 px-[18px] rounded-lg divide-x divide-[#343434] border-[#343434]"
      >
        <div className="flex-shrink-0  py-4   mr-4 sm:mr-8 flex-1">
          <Heading type="H4" text={CHECKIN_TEXT} />
          <Paragraph
            className="text-paragraph "
            text={checkInDate?.format(DATE_FORMAT) || ADD_DATE_TEXT}
          />
        </div>
        <div className="flex-shrink-0 pl-4 flex-1 py-4 mr-2 ">
          <Heading type="H4" text={CHECKOUT_TEXT} />
          <Paragraph
            className="text-paragraph"
            text={checkOutDate?.format(DATE_FORMAT) || ADD_DATE_TEXT}
          />
        </div>
      </button>
    </div>
  )
}
