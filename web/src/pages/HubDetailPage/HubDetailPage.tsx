import React, { useState, useEffect, useRef } from 'react'
import SingleColumnLayout from 'src/layouts/SingleColumnLayout/SingleColumnLayout'
import AddressComponent from './AddressComponent'
import ImageViewer from '../../components/ImageViewer/ImageViewer'
import Amenities from '../../components/Amenities/Amenities'
import NfcReserve from '../../utils/svgs/nfc-reserve'
import Reviews from '../../components/Reviews/Reviews'

const HubDetailPage = () => {
  const [sliderVisible, setSliderVisible] = useState(false)
  const imageRef = useRef(null)

  useEffect(() => {
    window.addEventListener('mousedown', () => {
      const slider = document.querySelector('.slick-slider')
      if (slider.classList.contains('.slick-initialized')) {
        setSliderVisible(false)
        console.log(sliderVisible)
      } else {
        setSliderVisible(true)
        console.log(sliderVisible)
      }
    })
    return () =>
      document.removeEventListener('mousedown', () =>
        console.log('event listener removed')
      )
  }, [])

  const mouseClickHandler = (event) => {
    if (imageRef && !imageRef.current.contains(event.target)) {
      const slider = document.querySelector('.slick-slider')
      setSliderVisible(false)
      slider.classList.remove('.slick-initalized')
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', (event) => mouseClickHandler(event))
    return () =>
      document.removeEventListener('mousedown', (event) =>
        mouseClickHandler(event)
      )
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
          <div className="lg:mt-4 mt-1 col-span-1 lg:col-span-2" ref={imageRef}>
            <ImageViewer />
          </div>
          <a
            className={`${
              sliderVisible ? 'opacity-5' : 'opacity-100'
            } lg:mt-4 mt-2 object-contain`}
            href="_blank"
          >
            {window.innerWidth > 1024 ? <NfcReserve /> : null}
          </a>
          <div className="mt-4 mb-4 lg:mb-20">
            <Amenities sliderVisible={sliderVisible} />
          </div>
        </div>
        <div className="mt-4 mb-20">
          <Reviews sliderVisible={sliderVisible} />
        </div>
      </div>
    </SingleColumnLayout>
  )
}

export default HubDetailPage
