import { useState } from 'react'
import { Button } from '@buildcities/build-ui.components.all'
import moment from 'moment'
import TableActionButtonGroup from './components/table-action-buttons'
import { navigate, routes } from '@redwoodjs/router'
const DATE_FORMAT = 'DD/MM/YYYY'

export type ReservationListItemProps = {
  id?: string
  address?: string
  status?: 'NEW' | 'APPROVED' | 'REJECTED'
  checkInDate?: string
  checkOutDate?: string
  discordName?: string
  avatar?: string
  type?: string
  hideOverlay?: boolean
}

const ReservationListItem = ({
  id,
  address,
  checkInDate,
  checkOutDate,
  status,
  discordName,
  avatar,
  type,
  hideOverlay,
}: ReservationListItemProps) => {
  const onClick = () => {
    navigate(routes.confirmReservation({ id }))
  }

  const [overlay, setOverlay] = useState<boolean>(false)
  return type === 'unapproved' ? (
    <tr
      onClick={onClick}
      className="flex items-center justify-between xl:flex-nowrap flex-wrap bg-cardBackground rounded-xl mb-4 px-6 py-4"
    >
      <td className="flex items-center xl:w-1/5 sm:w-1/3 sm:justify-start lg:mb-0 mb-4 justify-center w-full">
        <img
          src={avatar}
          alt={`${address}'s avatar`}
          className="w-16 h-16 border border-mainText rounded-full"
        />
        <div className="flex flex-col items-start ml-4">
          <span className="truncate w-48">{address}</span>
          {discordName.length > 0 && <span>{discordName}</span>}
        </div>
      </td>
      <td className="flex relative md:justify-center justify-end xl:w-1/5 sm:w-1/3 lg:mb-0 sm:pr-0 pr-4 mb-4 w-1/2">
        {moment(checkInDate).format(DATE_FORMAT)}
        <span className="sm:hidden block absolute -right-2">to</span>
      </td>
      <td className="flex md:justify-center sm:justify-end justify-start xl:w-1/5 sm:w-1/3 lg:mb-0 sm:pl-0 pl-4 mb-4 w-1/2">
        {moment(checkOutDate).format(DATE_FORMAT)}
      </td>
      <TableActionButtonGroup status={status} id={id} />
    </tr>
  ) : (
    <div
      aria-hidden
      onClick={onClick}
      className="relative flex items-center justify-between bg-cardBackground rounded-xl px-6 py-4 transition-all duration-300 hover:drop-shadow-[0_0px_10px_rgba(123,97,255,0.5)] cursor-pointer"
      onMouseEnter={() => setOverlay(true)}
      onMouseLeave={() => setOverlay(false)}
    >
      {!hideOverlay && (
        <div
          className={`absolute top-0 right-0 w-1/2 flex items-center justify-end h-full transition-opacity duration-300 bg-cardBackground px-6 py-4 ${
            overlay
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <Button text="Send message" style="primary" className="w-44 h-11" />
        </div>
      )}
      <div className="flex items-center">
        <img
          src={avatar}
          alt={`${address}'s avatar`}
          className="w-16 h-16 border border-mainText rounded-full"
        />
        <div className="flex flex-col items-start ml-4">
          <span className="truncate w-48">{address}</span>
          {discordName && <span>{discordName}</span>}
        </div>
      </div>
      <div>
        <span>{moment(checkInDate).format(DATE_FORMAT)}</span>
      </div>
      <div>
        <span>{moment(checkOutDate).format(DATE_FORMAT)}</span>
      </div>
    </div>
  )
}

export default ReservationListItem
