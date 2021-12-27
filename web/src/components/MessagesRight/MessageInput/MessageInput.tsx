import React from 'react'

type MessageInputProps = {
  data?: Array<string>
  avatar?: string
  address?: string
  type?: string
}

const MessageInput = ({ avatar, address }: MessageInputProps) => {
  return (
    <div className="relative">
      <div className="block fixed bottom-[30px] w-1/2 max-w-[816px] mr-96 items-bottom bg-[#171717] rounded-xl px-4 py-2">
        <div className="flex items-end justify-left">
          <div className="items-center grid grid-rows-2 grid-flow-col text-left border-solid border-1 border-white">
            <img
              src={avatar}
              alt={`${address}'s avatar`}
              className="row-span-2 mr-4 mt-1 mb-1 w-16 h-16 border border-white rounded-full my-auto"
            />
            <div className="w-full grow right-auto left-0 overflow-hidden row-span-2 col-span-1 text-white items-start">
              <input
                className="truncate text-ellipsis text-[#E8E8E8] text-sm no bg-[#171717] border-0"
                placeholder="Type a message"
                type="text"
              ></input>
            </div>
            <div className="right-0 mr-0 left-auto"></div>
            <div className="ml-auto justify-items-end text-xs row-end-3 text-gray-700 "></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageInput
