// import React from 'react'

// type ThreadMessagesProps = {
//   avatar?: string
//   address?: string
//   message?: string
//   date?: string
//   active?: boolean
//   dataUser?: any
//   dataOwner?: any
// }

// const ThreadMessages = ({
//   date,
//   avatar,
//   address,
//   message,
//   dataOwner,
// }: ThreadMessagesProps) => {
//   return (
//     <>
//       {dataOwner ? (
//         <div className="bg-[#171717] rounded-xl w-full p-4 grid grid-rows-2 grid-flow-col text-left border-solid border-white border-1 mb-4">
//           <img
//             src={avatar}
//             alt={`${address}'s avatar`}
//             className="row-span-2 mr-4 w-16 h-16 border border-white rounded-full my-auto"
//           />
//           <div className="flex-shrink grow text-ellipsis overflow-hidden col-span-1 text-white items-start">
//             <p className="font-bold whitespace-pre-wrap text-ellipsis no">
//               {address}
//             </p>
//           </div>
//           <div className="w-4/5 pt-2 grow text-ellipsis right-auto left-0 overflow-hidden row-span-1 col-span-1 text-white items-start bottom-1">
//             <p className="truncate text-ellipsis no">{message}</p>
//           </div>
//           <div className="right-0 mr-0 left-auto"></div>
//           <div className="ml-auto pt-2 justify-items-end text-xs row-end-3 text-gray-700 ">
//             <p className="pt-1">{date}</p>
//           </div>
//         </div>
//       ) : (
//         <div className="rounded-xl w-full p-4 grid grid-rows-2 grid-flow-col text-left border-solid border-white border-1 mb-4">
//           <img
//             src={avatar}
//             alt={`${address}'s avatar`}
//             className="row-span-2 mr-4 w-16 h-16 border border-white rounded-full my-auto"
//           />
//           <div className="flex-shrink grow text-ellipsis overflow-hidden col-span-1 text-white items-start">
//             <p className="font-bold whitespace-pre-wrap text-ellipsis no">
//               {address}
//             </p>
//           </div>
//           <div className="w-4/5 pt-2 grow text-ellipsis right-auto left-0 overflow-hidden row-span-1 col-span-1 text-white items-start bottom-1">
//             <p className="truncate text-ellipsis no">{message}</p>
//           </div>
//           <div className="right-0 mr-0 left-auto"></div>
//           <div className="ml-auto pt-2 justify-items-end text-xs row-end-3 text-gray-700 ">
//             <p className="pt-1">{date}</p>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default ThreadMessages
