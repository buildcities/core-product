import React from 'react'
import UserMessage from './UserMessage/UserMessage'
import MessagesHeader from './MessagesHeader/MessagesHeader'
import MessageInput from './MessageInput/MessageInput'
import MobileMsgHeader from '../MessagesLeft/MobileMsgHeader/MobileMsgHeader'

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
  return (
    <>
      <div className="w-full h-full relative">
        {window.innerWidth < 768 && <MobileMsgHeader data={data} />}
        <MessagesHeader
          location={dataContact[0].location}
          locationImage={locationImage}
        />
        {data.map((listing) =>
          Object.keys(listing).map((listingName, index) => (
            <UserMessage
              locationImage={locationImage}
              location={location}
              {...listing[listingName]}
              key={index}
            />
          ))
        )}
        <MessageInput
          avatar={data[0].message1.avatar}
          address={data[0].message1.address}
          type={data[0].message1.type}
        />
      </div>
    </>
  )
}

export default MessagesRight
