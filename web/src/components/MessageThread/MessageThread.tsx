// import React from 'react'
// import ThreadMessages from './ThreadMessages/ThreadMessages'

// type MessagesProps = {
//   dataOwner?: any
//   dataUser?: any
// }

// const MessageThread = ({ dataOwner, dataUser }: MessagesProps) => {
//   return (
//     <>
//       <div className="block text-sm text-white transition-all duration-300 rounded-xl">
//         {dataOwner.map((listing) =>
//           Object.keys(listing).map((listingName, index) => (
//             <ThreadMessages
//               {...listing[listingName]}
//               key={index}
//               dataOwner={dataOwner}
//             />
//           ))
//         )}
//         {dataUser.map((listing) =>
//           Object.keys(listing).map((listingName, index) => (
//             <ThreadMessages
//               {...listing[listingName]}
//               key={index}
//               dataUser={dataUser}
//             />
//           ))
//         )}
//       </div>
//     </>
//   )
// }

// export default MessageThread
