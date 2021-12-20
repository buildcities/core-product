import React from 'react'
import Message from './Message/Message'

type MessagesProps = {
  data
}

const Messages = ({ data }: MessagesProps) => {
  return (
    <>
      <h1 className="text-white text-2xl font-sans mb-10">Messages</h1>
      <div className="block text-sm text-white mb-4 transition-all duration-300">
        {data.map((listing) =>
          Object.keys(listing).map((listingName, index) => (
            <Message {...listing[listingName]} key={index} />
          ))
        )}
      </div>
    </>
  )
}

export default Messages
