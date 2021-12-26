import { MetaTags } from '@redwoodjs/web'
import React from 'react'
import TwoColumnLayoutLayout from 'src/layouts/TwoColumnLayoutLayout/TwoColumnLayoutLayout'
import Messages from '../../components/Messages/Messages'
import { messagesData } from '../../components/Messages/presets'
import { dataUser } from '../../components/UserMessage/presets'
import { dataOwner } from '../../components/OwnerMessage/presets'
import CheckinDates from 'src/components/CheckinDates/CheckinDates'
import MapPin from '../../utils/svgs/map-pin'
import image1 from './image1.png'
import UserMessage from '../../components/UserMessage/UserMessage'
import OwnerMessage from '../../components/OwnerMessage/OwnerMessage'

const location = 'Los Angeles, Hidden Hills, Ultra Secret Location'

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
              {dataUser.map((listing) =>
                Object.keys(listing).map((listingName, index) => (
                  <UserMessage {...listing[listingName]} key={index} />
                ))
              )}
            </div>
            <div className="text-white w-full">
              {dataOwner.map((listing) =>
                Object.keys(listing).map((listingName, index) => (
                  <OwnerMessage {...listing[listingName]} key={index} />
                ))
              )}
            </div>
          </div>
        </div>
        <div className="ml-96 mr-4">
          <div className="relative">
            <div className="block fixed bottom-[30px] w-1/2 max-w-[816px] mr-96 items-bottom bg-[#171717] rounded-xl px-4 py-2">
              <div className="flex items-end justify-left">
                <div className="items-center grid grid-rows-2 grid-flow-col text-left border-solid border-1 border-white">
                  <img
                    src={dataUser[0].message1.avatar}
                    alt={`${dataUser[0].message1.address}'s avatar`}
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
