type MessageProps = {
  avatar?: string
  address?: string
  message?: string
  date?: string
}

const Message = ({ date, avatar, address, message }: MessageProps) => {
  return (
    <>
      <div className="block bg-[#171717] rounded-xl">
        <div className="w-full p-4 grid grid-rows-3 grid-flow-col text-left mb-4 border-solid border-white border-1">
          <img
            src={avatar}
            alt={`${address}'s avatar`}
            className="row-span-3 mr-0 w-16 h-16 border border-white rounded-full my-auto"
          />
          <div className="flex-shrink text-ellipsis overflow-hidden col-span-2 text-white items-start bottom-1 ml-4">
            <p className="font-bold whitespace-pre-wrap text-ellipsis no">
              {address}
            </p>
          </div>
          <div className="w-3/4 text-ellipsis right-auto left-0 overflow-hidden row-span-1 col-span-2 text-white items-start bottom-1 ml-4">
            <p className="truncate text-ellipsis no">{message}</p>
          </div>
          <div className="right-0 mr-0 left-auto"></div>
        </div>
        <div className="ml-auto justify-right flex mr-0 pr-0 mb-0 text-xs text-grey-500">
          {date}
        </div>
      </div>
    </>
  )
}

export default Message
