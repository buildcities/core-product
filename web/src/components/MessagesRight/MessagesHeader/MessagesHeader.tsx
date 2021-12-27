import React from 'react'
import CheckInDates from '../../../components/CheckinDates/CheckinDates'
import MapPin from '../../../utils/svgs/map-pin'

type MessagesHeaderProps = {
  location?: string
  locationImage?: string
}

const MessagesHeader = ({ location, locationImage }: MessagesHeaderProps) => {
  console.log(location)
  return (
    <div className="grid grid-flow-col-dense grid-cols-3 grid-rows-1">
      <div className="col-span1">
        <img src={locationImage} alt={`${locationImage}`}></img>
      </div>
      <div className="col-span-2">
        <span className="text-white mb-4 font-bold text-3xl font-sans ml-6">
          Awesome place to stay
        </span>
        <div className="inline-flex ml-6 mt-2">
          <div className="mt-0 mb-0">
            <MapPin />
          </div>
          <div className="ml-2 text-white text-sm">{location}</div>
        </div>
        <div className="text-white ml-6 mr-20">
          <CheckInDates />
        </div>
      </div>
    </div>
  )
}

export default MessagesHeader
