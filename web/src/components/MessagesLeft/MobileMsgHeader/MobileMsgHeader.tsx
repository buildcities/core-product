import React from 'react'

type MobileMsgHeaderProps = {
  data?: any
}

const MobileMsgHeader = ({ data }: MobileMsgHeaderProps) => {
  return (
    <div className="block">
      <div className="flex justify-left shrink">
        <p className="flex text-white items-center content-center align-middle">
          left-svg
        </p>
        <div className="bg-[#171717] justify-start w-full rounded-xl px-4 items-center py-2 grid grid-rows-2 grid-flow-col text-left border-solid border-white border-1 mb-4">
          <img
            src={data[0].message1.avatar}
            alt={`${data[0].message1.address}'s avatar`}
            className="row-span-2 shrink mr-4 mt-1 mb-1 w-16 h-16 border border-white rounded-full my-auto"
          />
          <div className="flex-shrink grow-5 justify-start text-ellipsis overflow-hidden col-span-1 text-white items-start">
            <p className="font-bold whitespace-pre-wrap text-ellipsis no">
              {data[0].message1.address}
            </p>
          </div>
          <div className="right-0 mr-0 left-auto"></div>
          <div className="ml-auto justify-items-end text-xs row-end-3 text-gray-700"></div>
        </div>
      </div>
    </div>
  )
}

export default MobileMsgHeader
