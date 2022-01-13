/* eslint-disable @typescript-eslint/no-explicit-any */
import ReservationListing from './components/reservation-listing'

import {
  USER_HEADING_TEXT,
  CHECKIN_HEADING_TEXT,
  CHECKOUT_HEADING_TEXT,
} from './presets'

// Fix later
type ReservationTableProps = {
  data: any
  type: 'approved' | 'unapproved'
}

const ReservationTable = ({ data, type }: ReservationTableProps) => {
  return (
    <div className="flex text-sm text-mainText mb-4 transition-all duration-300">
      {type === 'unapproved' && (
        <table className="w-full">
          <thead className="sm:flex hidden items-center justify-between pb-4 px-6 xl:flex-nowrap flex-wrap">
            <tr className="flex justify-center xl:w-1/5 w-1/3">
              {USER_HEADING_TEXT}
            </tr>
            <tr className="flex md:justify-center xl:w-1/5 w-1/3 justify-end">
              {CHECKIN_HEADING_TEXT}
            </tr>
            <tr className="flex md:justify-center xl:w-1/5 w-1/3 justify-end">
              {CHECKOUT_HEADING_TEXT}
            </tr>
            <tr className="flex justify-center xl:w-1/5 w-0"></tr>
            <tr className="flex justify-center xl:w-1/5 w-0"></tr>
          </thead>
          <tbody className="font-bold">
            {data?.length &&
              data.map((listing, index) => (
                <ReservationListing
                  {...listing}
                  key={index}
                  type="unapproved"
                />
              ))}
          </tbody>
        </table>
      )}
      {type === 'approved' && (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-4 flex-grow font-bold">
          {data?.length &&
            data.map((listing) =>
              Object.keys(listing).map((listingName, index) => (
                <ReservationListing
                  {...listing[listingName]}
                  key={index}
                  type="approved"
                />
              ))
            )}
        </div>
      )}
    </div>
  )
}

export default ReservationTable
