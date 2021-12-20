import ReservationListing from './components/reservation-listing'
import {
  USER_HEADING_TEXT,
  CHECKIN_HEADING_TEXT,
  CHECKOUT_HEADING_TEXT,
} from './presets'

type ListingData = {
  address: string
  checkIn: string
  checkOut: string
  discordName: string
  avatar: string
}

type Items = {
  items: {
    [key: string]: ListingData
  }
}
// Fix later
type ListReservationsProps = {
  data: any
}

const ListReservations = ({ data }: ListReservationsProps) => {
  return (
    <div className="max-w-[1200px] mt-14">
      <table className="text-sm w-screen text-white">
        <thead className="flex items-center justify-between text-paragraph pb-4 px-6">
          <tr className="flex justify-center w-1/5">{USER_HEADING_TEXT}</tr>
          <tr className="flex justify-center w-1/5">{CHECKIN_HEADING_TEXT}</tr>
          <tr className="flex justify-center w-1/5">{CHECKOUT_HEADING_TEXT}</tr>
          <tr className="flex justify-center w-1/5"></tr>
          <tr className="flex justify-center w-1/5"></tr>
        </thead>
        <tbody className="font-bold">
          {data.map((listing) =>
            Object.keys(listing).map((listingName, index) => (
              <ReservationListing {...listing[listingName]} key={index} />
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ListReservations
