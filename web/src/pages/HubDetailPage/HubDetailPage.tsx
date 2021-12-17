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
          <h1
            className={`${
              sliderVisible ? 'opacity-5' : 'opacity-100'
            } text-white font-bold font-sans text-5xl `}
          >
            Awesome place to stay
          </h1>
        </div>
        <div className="mt-4">
          <AddressComponent sliderVisible={sliderVisible} />
        </div>
        <div className="container grid grid-cols-1 lg:grid-cols-3 h-full">
          <div className="lg:mt-4 mt-1 col-span-1 lg:col-span-2">
            <ImageViewer sliderVisible={sliderVisible} />
          </div>
          <a
            className={`${
              sliderVisible ? 'opacity-5' : 'opacity-100'
            } lg:mt-4 mt-2 object-contain`}
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
