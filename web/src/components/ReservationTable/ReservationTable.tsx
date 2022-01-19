/* eslint-disable @typescript-eslint/no-explicit-any */
import ReservationListing from 'src/components/ReservationListItem'

import {
  USER_HEADING_TEXT,
  CHECKIN_HEADING_TEXT,
  CHECKOUT_HEADING_TEXT,
  CURRENT_RESERVATIONS_TEXT,
  WAITING_FOR_APPROVAL_TEXT,
} from './presets'

// Fix later
type ReservationTableProps = {
  data: any
  type: 'approved' | 'unapproved'
}

const ReservationTable = ({ data, type }: ReservationTableProps) => {
  return (
    data?.length && (
      <div className="w-full text-sm text-mainText mb-4 transition-all duration-300">
        {type === 'unapproved' && (
          <>
            <h2 className="text-paragraph font-sans font-medium lg:text-3xl text-xl mb-2">
              {WAITING_FOR_APPROVAL_TEXT}
            </h2>
            <table className="w-full">
              <thead>
                <tr className="sm:flex hidden items-center justify-between pb-4 px-6 xl:flex-nowrap flex-wrap">
                  <th className="flex justify-center xl:w-1/5 w-1/3">
                    <span>{USER_HEADING_TEXT}</span>
                  </th>
                  <th className="flex md:justify-center xl:w-1/5 w-1/3 justify-end">
                    <span>{CHECKIN_HEADING_TEXT}</span>
                  </th>
                  <th className="flex md:justify-center xl:w-1/5 w-1/3 justify-end">
                    <span>{CHECKOUT_HEADING_TEXT}</span>
                  </th>
                  <th className="flex justify-center xl:w-1/5 w-0"></th>
                  <th className="flex justify-center xl:w-1/5 w-0"></th>
                </tr>
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
          </>
        )}
        {type === 'approved' && data?.length && (
          <div>
            <h2 className="text-paragraph font-sans font-medium lg:text-3xl text-xl mb-2">
              {CURRENT_RESERVATIONS_TEXT}
            </h2>
            <div className="columns-md space-y-4 font-bold">
              {data?.length &&
                data.map((listing, index) => (
                  <ReservationListing
                    {...listing}
                    key={index}
                    type="approved"
                  />
                ))}
            </div>
          </div>
        )}
      </div>
    )
  )
}

export default ReservationTable
