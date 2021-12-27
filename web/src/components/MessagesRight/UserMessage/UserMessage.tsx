import React from 'react'

export const ADDRESS = '0x000...0212'
export const MESSAGE = 'Sure Johnny, bring good attitude and winning smile'

type UserMessageProps = {
  userdata
  time?: string
  message?: string
  address?: string
  avatar?: string
  name?: string
  type?: string
}

const UserMessage = ({
  time,
  message,
  address,
  avatar,
  name,
  type,
}: UserMessageProps) => {
  return (
    <>
      <div className="text-[#777777] text-xs flex justify-center font-sans mx-auto mb-2 pt-4">
        {time}
      </div>
      {type === 'user' ? (
        <div className="block">
          <div className="flex justify-left shrink">
            <div className="bg-[#171717] rounded-xl px-4 items-center py-2 grid grid-rows-2 grid-flow-col text-left border-solid border-white border-1 mb-4">
              <img
                src={avatar}
                alt={`${address}'s avatar`}
                className="row-span-2 mr-4 mt-1 mb-1 w-16 h-16 border border-white rounded-full my-auto"
              />
              <div className="flex-shrink grow text-ellipsis overflow-hidden col-span-1 text-white items-start">
                <p className="font-bold whitespace-pre-wrap text-ellipsis no">
                  {address}
                </p>
              </div>
              <div className="w-full grow right-auto left-0 overflow-hidden row-span-1 col-span-1 text-white items-start">
                <p className="truncate text-ellipsis text-[#E8E8E8] text-sm no">
                  {message}
                </p>
              </div>
              <div className="right-0 mr-0 left-auto"></div>
              <div className="ml-auto justify-items-end text-xs row-end-3 text-gray-700 "></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="block">
          <div className="flex w-full justify-end">
            <div>
              <div className="bg-[#171717] rounded-xl items-center min-w-max px-4 py-2 grid grid-rows-2 col-end-3 grid-flow-col text-right border-solid border-white mb-4">
                <div className="flex-shrink text-right grow text-ellipsis overflow-hidden col-span-1 text-white">
                  <p className="font-bold whitespace-pre-wrap text-right mr-4 text-ellipsis no">
                    {name}
                  </p>
                </div>
                <div className="grow right-auto whitespace-nowrap text-right left-0 overflow-visible row-span-1 col-span-1 text-white items-start">
                  <p className="text-right text-sm text-[#E8E8E8] no whitespace-nowrap mr-4">
                    {message}
                  </p>
                </div>
                <img
                  src={avatar}
                  alt={`${name}'s avatar`}
                  className="row-span-2 mt-1 mb-1 w-16 h-16 border border-white rounded-full my-auto"
                />
                <div className="right-0 mr-0 left-auto"></div>
                <div className="ml-auto justify-items-end text-xs row-end-3 text-gray-700 "></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default UserMessage
