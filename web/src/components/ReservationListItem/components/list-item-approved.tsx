import { Button } from '@buildcities/build-ui.components.all'
import { navigate, routes } from '@redwoodjs/router'
import classNames from 'classnames'
import moment from 'moment'
import React from 'react'
import { ReservationListItemProps } from '../ReservationListItem'
const DATE_FORMAT = 'DD/MM/YYYY'

export default function ListItemApproved({
  id,
  checkInDate,
  checkOutDate,
  discordName,
  address,
  avatar,
}: ReservationListItemProps) {
  const onClick = () => {
    navigate(routes.confirmReservation({ id }))
  }
  return (
    <div className="relative w-full group">
      <div
        className={classNames(
          'absolute group-hover:-inset-0.5 w-full h-full  px-6 py-4 bg-selected rounded-lg group-hover:blur-[10px]'
        )}
      />

      <div className="flex px-6 py-4 justify-between items-center w-full bg-cardBackground rounded-lg relative">
        <div
          aria-hidden
          onClick={onClick}
          className="flex cursor-pointer  items-center"
        >
          <img
            src={avatar}
            alt={`${address}'s avatar`}
            className="w-16 h-16 border border-mainText rounded-full"
          />
          <div className="flex flex-col items-start ml-2 sm:ml-4">
            <span className="truncate  w-24 lg:w-48">{address}</span>
            {discordName && <span>{discordName}</span>}
          </div>
        </div>
        <div className="relative flex-1">
          <div className="flex group-hover:hidden  justity-end flex-1 sm:justify-between flex-wrap">
            <span className="flex-1 text-right">
              {moment(checkInDate).format(DATE_FORMAT)}
            </span>

            <span className="flex-1 text-right">
              {moment(checkOutDate).format(DATE_FORMAT)}
            </span>
          </div>
          <div className="absolute hidden group-hover:block right-0 -top-5 ">
            <Button
              text="Send message"
              onClick={() => {
                console.log('hello')
              }}
              style="primary"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
