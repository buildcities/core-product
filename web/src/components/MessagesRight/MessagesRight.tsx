import React from 'react'
import UserMessage from './UserMessage/UserMessage'
import OwnerMessage from './OwnerMessage/OwnerMessage'
import MessagesHeader from './MessagesHeader/MessagesHeader'
import MessageInput from './MessageInput/MessageInput'

type MessagesRightProps = {
  data
  locationImage
  dataContact
}

const MessagesRight = ({
  data,
  dataContact,
  locationImage,
}: MessagesRightProps) => {
  console.log(dataContact)
  return (
    <>
      <MessagesHeader
        location={dataContact[0].location}
        locationImage={locationImage}
      />
      <div className="ml-96 mr-4">
        <div className="text-white w-full">
          {data[0].map((listing) =>
            Object.keys(listing).map((listingName, index) => (
              <UserMessage
                locationImage={locationImage}
                location={location}
                {...listing[listingName]}
                key={index}
              />
            ))
          )}
        </div>
        <div className="text-white w-full">
          {data[1].map((listing) =>
            Object.keys(listing).map((listingName, index) => (
              <OwnerMessage
                locationImage={locationImage}
                location={location}
                {...listing[listingName]}
                key={index}
              />
            ))
          )}
        </div>
        <MessageInput
          avatar={data[0][0].message1.avatar}
          address={data[0][0].message1.address}
        />
      </div>
    </>
  )
}

export default MessagesRight
