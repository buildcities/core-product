import React from 'react'
import ReservationButton from 'src/components/bit.dev/reservation-dashboard/reservation-button'

type ReservationListingProps = {
  address: string
  checkIn: string
  checkOut: string
  discordName: string
  avatar: string
}

const ReservationListing = ({
  address,
  checkIn,
  checkOut,
  discordName,
  avatar,
}: ReservationListingProps) => {
  return (
    <tr className="flex items-center justify-between bg-cardBackground rounded-xl mb-4 px-6 py-4">
      <td className="flex items-center justify-center w-1/5">
        <img
          src={avatar}
          alt={`${address}'s avatar`}
          className="w-16 h-16 border border-white rounded-full"
        />
        <div className="flex flex-col items-start ml-4">
          <span>{address}</span>
          {discordName.length > 0 && <span>{discordName}</span>}
        </div>
      </td>
      <td className="flex justify-center w-1/5">{checkIn}</td>
      <td className="flex justify-center w-1/5">{checkOut}</td>
      <td className="flex justify-center w-1/5">
        <ReservationButton type="Reject" />
      </td>
      <td className="flex justify-center w-1/5">
        <ReservationButton type="Accept" />
      </td>
    </tr>
  )
}

export default ReservationListing
