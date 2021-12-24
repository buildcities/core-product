import { MetaTags } from '@redwoodjs/web'
import React from 'react'
import TwoColumnLayoutLayout from 'src/layouts/TwoColumnLayoutLayout/TwoColumnLayoutLayout'
import Messages from '../../components/Messages/Messages'
import { messagesData } from '../../components/Messages/presets'
import CheckinDates from 'src/components/CheckinDates/CheckinDates'
import MapPin from '../../utils/svgs/map-pin'
import image1 from './image1.png'
import Owner1 from '../../components/MessageThread/Owner1.png'
import User1 from '../../components/MessageThread/User1.png'

const location = 'Los Angeles, Hidden Hills, Ultra Secret Location'
const userMessage =
  'Heeeya, I just want to go to the hub. Is there something I should know before coming?'
const ownerMessage = 'Sure Johny, bring good attitude and smile!'
const userMessage2 = 'Thank you, see ya!'
const time = '11:21pm'
const userAvatar1 = User1
const ownerAvatar = Owner1
const userAddress = '0x0001...2121'
const ownerName = 'lelele.eth'

const HubContactPage = () => {
  return (
    <>
      <TwoColumnLayoutLayout
        metaTitle="Hub Contact Page"
        sideBar={<Messages data={messagesData} />}
      >
        <MetaTags title="HubContact" />
        <div>
          <div className="grid grid-flow-col-dense grid-cols-3 grid-rows-1 ml-96">
            <div className="col-span1">
              <img src={image1} alt={`${image1}`}></img>
            </div>
            <div className="col-span-2">
              <span className="text-white mb-4 font-bold text-3xl font-sans ml-6">
                Awesome place to stay
              </span>
              <div className="inline-flex ml-6 mt-2">
                <div className="mt-0 mb-0">
                  <MapPin />
                </div>
                <div className="ml-2 text-white text-sm">{location}</div>
              </div>
              <div className="text-white ml-6 mr-20">
                <CheckinDates />
              </div>
            </div>
          </div>
          <div className="ml-96 mr-4">
            <div className="text-white w-full">
              <div className="text-[#777777] text-xs flex justify-center font-sans mx-auto mb-2 pt-4">
                {time}
              </div>
              <div className="block">
                <div className="flex justify-left shrink">
                  <div className="bg-[#171717] rounded-xl px-4 items-center py-2 grid grid-rows-2 grid-flow-col text-left border-solid border-white border-1 mb-4">
                    <img
                      src={userAvatar1}
                      alt={`${userAddress}'s avatar`}
                      className="row-span-2 mr-4 mt-1 mb-1 w-16 h-16 border border-white rounded-full my-auto"
                    />
                    <div className="flex-shrink grow text-ellipsis overflow-hidden col-span-1 text-white items-start">
                      <p className="font-bold whitespace-pre-wrap text-ellipsis no">
                        {userAddress}
                      </p>
                    </div>
                    <div className="w-full grow right-auto left-0 overflow-hidden row-span-1 col-span-1 text-white items-start">
                      <p className="truncate text-ellipsis text-[#E8E8E8] text-sm no">
                        {userMessage}
                      </p>
                    </div>
                    <div className="right-0 mr-0 left-auto"></div>
                    <div className="ml-auto justify-items-end text-xs row-end-3 text-gray-700 "></div>
                  </div>
                </div>
              </div>
              <div className="text-[#777777] text-xs flex justify-center font-sans mx-auto mb-2 pt-4">
                {time}
              </div>
              <div className="block">
                <div className="flex w-full justify-end">
                  <div>
                    <div className="bg-[#171717] rounded-xl items-center min-w-max px-4 py-2 grid grid-rows-2 col-end-3 grid-flow-col text-right border-solid border-white mb-4">
                      <div className="flex-shrink text-right grow text-ellipsis overflow-hidden col-span-1 text-white">
                        <p className="font-bold whitespace-pre-wrap text-right mr-4 text-ellipsis no">
                          {ownerName}
                        </p>
                      </div>
                      <div className="grow right-auto whitespace-nowrap text-right left-0 overflow-visible row-span-1 col-span-1 text-white items-start">
                        <p className="text-right text-sm text-[#E8E8E8] no whitespace-nowrap mr-4">
                          {ownerMessage}
                        </p>
                      </div>
                      <img
                        src={ownerAvatar}
                        alt={`${ownerName}'s avatar`}
                        className="row-span-2 mt-1 mb-1 w-16 h-16 border border-white rounded-full my-auto"
                      />
                      <div className="right-0 mr-0 left-auto"></div>
                      <div className="ml-auto justify-items-end text-xs row-end-3 text-gray-700 "></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[#777777] text-xs flex justify-center font-sans mx-auto mb-2 pt-4">
                {time}
              </p>
              <div className="block">
                <div className="flex justify-left w-full">
                  <div className="bg-[#171717] w-1/2 rounded-xl items-center p-2 grid justify-start justify-left grid-rows-2 grid-flow-col text-left border-solid border-white border-1 mb-4">
                    <img
                      src={userAvatar1}
                      alt={`${userAddress}'s avatar`}
                      className="row-span-2 ml-2 mr-4 w-16 h-16 shrink border mt-1 mb-1 border-white rounded-full my-auto"
                    />
                    <div className="flex-shrink text-left grow text-ellipsis overflow-hidden col-span-1 text-[#E8E8E8] items-start">
                      <p className="font-bold text-left whitespace-pre-wrap text-ellipsis no">
                        {userAddress}
                      </p>
                    </div>
                    <div className="grow text-left text-ellipsis right-auto left-0 overflow-hidden row-span-1 col-span-1 text-[#E8E8E8] items-start">
                      <p className="truncate text-left text-ellipsis text-[#E8E8E8] text-sm no">
                        {userMessage2}
                      </p>
                    </div>
                    <div className="right-0 mr-0 left-auto"></div>
                    <div className="ml-auto justify-items-end text-xs row-end-3 text-gray-700 "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-96 mr-4">
          <div className="relative">
            <div className="block fixed bottom-[30px] w-1/2 max-w-[816px] mr-96 items-bottom bg-[#171717] rounded-xl px-4 py-2">
              <div className="flex items-end justify-left">
                <div className="items-center grid grid-rows-2 grid-flow-col text-left border-solid border-1 border-white">
                  <img
                    src={userAvatar1}
                    alt={`${userAddress}'s avatar`}
                    className="row-span-2 mr-4 mt-1 mb-1 w-16 h-16 border border-white rounded-full my-auto"
                  />
                  <div className="w-full grow right-auto left-0 overflow-hidden row-span-2 col-span-1 text-white items-start">
                    <p className="truncate text-ellipsis text-[#E8E8E8] text-sm no">
                      Type a message
                    </p>
                  </div>
                  <div className="right-0 mr-0 left-auto"></div>
                  <div className="ml-auto justify-items-end text-xs row-end-3 text-gray-700 "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TwoColumnLayoutLayout>
    </>
  )
}

export default HubContactPage
