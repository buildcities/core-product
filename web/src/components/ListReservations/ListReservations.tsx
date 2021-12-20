import ReservationListing from './components/reservation-listing'

import {
  USER_HEADING_TEXT,
  CHECKIN_HEADING_TEXT,
  CHECKOUT_HEADING_TEXT,
} from './presets'

// type ListingData = {
//   address: string
//   checkIn: string
//   checkOut: string
//   discordName: string
//   avatar: string
// }

// type Items = {
//   items: {
//     [key: string]: ListingData
//   }
// }

// Fix later
type ListReservationsProps = {
  data: any
  type: string
}

const ListReservations = ({ data, type }: ListReservationsProps) => {
  return (
    <div className="2xl:min-w-[1200px] xl:min-w-[1000px] flex text-sm text-white mb-7 transition-all duration-300">
      {type === 'unapproved' && (
        <table className="flex-grow">
          <thead className="flex items-center justify-between text-paragraph pb-4 px-6">
            <tr className="flex justify-center w-1/5">{USER_HEADING_TEXT}</tr>
            <tr className="flex justify-center w-1/5">
              {CHECKIN_HEADING_TEXT}
            </tr>
            <tr className="flex justify-center w-1/5">
              {CHECKOUT_HEADING_TEXT}
            </tr>
            <tr className="flex justify-center w-1/5"></tr>
            <tr className="flex justify-center w-1/5"></tr>
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
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 flex-grow font-bold">
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
