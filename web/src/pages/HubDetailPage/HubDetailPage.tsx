import React, { useState, useEffect } from 'react'
import SingleColumnLayout from 'src/layouts/SingleColumnLayout/SingleColumnLayout'
import AddressComponent from './AddressComponent'
import ImageViewer from '../../components/ImageViewer/ImageViewer'
import Amenities from '../../components/Amenities/Amenities'
import NfcReserve from '../../utils/svgs/nfc-reserve'

const HubDetailPage = () => {
  const [sliderVisible, setSliderVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('click', () => {
      const slider = document.querySelector('.slick-slider')
      if (slider.classList.contains('.slick-initialized')) {
        setSliderVisible(false)
        console.log(sliderVisible)
      } else {
        setSliderVisible(true)
        console.log(sliderVisible)
      }
    })
  }, [])

  return (
    <SingleColumnLayout metaDescription="Hub details" metaTitle="Details">
      <div className="container w-full">
        <div className="flex w-full">
          <h1 className="text-white font-bold font-sans text-5xl ">
            Awesome place to stay
          </h1>
        </div>
        <div className="mt-4">
          <AddressComponent sliderVisible={sliderVisible} />
        </div>
        <div className="container grid grid-cols-3">
          <div className="mt-1 col-span-2">
            <ImageViewer />
          </div>
          <a
            className={`${sliderVisible ? 'opacity-5' : 'opacity-100'}`}
            href="_blank"
          >
            <NfcReserve />
          </a>
          <div className="mt-4">
            <Amenities sliderVisible={sliderVisible} />
          </div>
        </div>
      </div>
    </SingleColumnLayout>
  )
}

export default HubDetailPage
