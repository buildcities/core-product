import ReservationListing from './components/reservation-listing'

import {
  USER_HEADING_TEXT,
  CHECKIN_HEADING_TEXT,
  CHECKOUT_HEADING_TEXT,
} from './presets'

// Fix later
type ListReservationsProps = {
  data: any
  type: string
}

const ListReservations = ({ data, type }: ListReservationsProps) => {
  return (
    <div className="2xl:min-w-max flex text-sm text-white mb-7 transition-all duration-300">
      {type === 'unapproved' && (
        <table className="w-full">
          <thead className="sm:flex hidden items-center justify-between pb-4 px-6 xl:flex-nowrap flex-wrap">
            <tr className="flex justify-center xl:w-1/5 w-1/3">
              {USER_HEADING_TEXT}
            </tr>
            <tr className="flex justify-center xl:w-1/5 w-1/3">
              {CHECKIN_HEADING_TEXT}
            </tr>
            <tr className="flex justify-center xl:w-1/5 w-1/3">
              {CHECKOUT_HEADING_TEXT}
            </tr>
            <tr className="flex justify-center xl:w-1/5 w-0"></tr>
            <tr className="flex justify-center xl:w-1/5 w-0"></tr>
          </thead>
          <tbody className="font-bold">
            {data.map((listing) =>
              Object.keys(listing).map((listingName, index) => (
                <ReservationListing
                  {...listing[listingName]}
                  key={index}
                  type="unapproved"
                />
              ))
            )}
          </tbody>
        </table>
      )}
      {type === 'approved' && (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-4 flex-grow font-bold">
          {data.map((listing) =>
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

export default ListReservations
