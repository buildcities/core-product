import { Button } from '@buildcities/build-ui.components.all'
import { navigate, routes } from '@redwoodjs/router'
import classNames from 'classnames'
import moment from 'moment'
import React from 'react'
import { useStore } from 'src/utils/stores/authStore'
import { ReservationListItemProps } from '../ReservationListItem'
const DATE_FORMAT = 'DD/MM/YYYY'

export default function ListItemApproved({
  id,
  checkInDate,
  checkOutDate,
  discordName,
  address,
  avatar,
  hubOwnerAvatar,
  hubOwner,
  ownerId,
  location,
}: ReservationListItemProps) {
  const onClick = () => {
    navigate(routes.confirmReservation({ id }))
  }
  /* todo: remove store reference from component */
  const userId = useStore((s) => s.userId)
  const _discordName = userId == ownerId ? hubOwner : discordName
  const _avatar = userId == ownerId ? hubOwnerAvatar : avatar
  return (
    <div className="relative mb-5  w-full group">
      <div
        className={classNames(
          'absolute group-hover:-inset-0.5 w-full h-full px-6 py-4 bg-selected rounded-lg group-hover:blur-[10px]'
        )}
      />

      <div className="relative flex px-6 py-4 justify-between items-center w-full bg-cardBackground rounded-lg ">
        <div
          aria-hidden
          onClick={onClick}
          className="flex cursor-pointer  items-center"
        >
          <img
            src={_avatar}
            alt={`${address}'s avatar`}
            className="w-16 h-16 border border-mainText rounded-full"
          />
          <div className=" ml-2 sm:ml-4">
            <div className="truncate  w-24 lg:w-48">{location}</div>
            {discordName && <span>{_discordName}</span>}
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
            <Button text="Send message" onClick={() => {}} style="primary" />
          </div>
        </div>
      </div>
    </div>
  )
}
