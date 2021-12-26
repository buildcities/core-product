import React from 'react'
import Message from './Message/Message'

type MessagesLeftProps = {
  data
}

const MessagesLeft = ({ data }: MessagesLeftProps) => {
  return (
    <>
      <h1 className="text-white text-2xl font-sans mb-4">Messages</h1>
      <div className="block text-sm text-white transition-all duration-300 rounded-xl">
        {data.map((listing) =>
          Object.keys(listing).map((listingName, index) => (
            <Message {...listing[listingName]} key={index} />
          ))
        )}
      </div>
    </>
  )
}

export default MessagesLeft
