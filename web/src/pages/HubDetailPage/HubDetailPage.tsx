import React from 'react'
import SingleColumnLayout from 'src/layouts/SingleColumnLayout/SingleColumnLayout'
import AddressComponent from './AddressComponent'
import ImageViewer from 'src/components/ImageViewer/ImageViewer'
import Amenities from 'src/components/Amenities/Amenities'

const HubDetailPage = () => {
  return (
    <SingleColumnLayout metaDescription="Hub details" metaTitle="Details">
      <div className="container bg-gradient-to-r from-black-400">
        <div className="flex w-full">
          <h1 className="text-white text-6xl text-[2.5rem]">
            Awesome place to stay
          </h1>
        </div>
        <div className="mt-8">
          <AddressComponent />
        </div>
        <div>
          <ImageViewer />
        </div>
        <div className="mt-8">
          <Amenities />
        </div>
      </div>
    </SingleColumnLayout>
  )
}

export default HubDetailPage
