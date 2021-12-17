import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
import image1 from 'src/pages/HubDetailPage/TestImages/image1.png'
import image2 from 'src/pages/HubDetailPage/TestImages/image2.png'
import image3 from 'src/pages/HubDetailPage/TestImages/image3.png'
import image4 from 'src/pages/HubDetailPage/TestImages/image4.png'
import image5 from 'src/pages/HubDetailPage/TestImages/image5.png'
import image6 from 'src/pages/HubDetailPage/TestImages/image6.png'
import image7 from 'src/pages/HubDetailPage/TestImages/image7.png'
import './slick.min.css'
import './slick-theme.min.css'

const ImageViewer = () => {
  const imageSlider = () =>
    [image1, image6, image7, image4, image5].map((num, i) => (
      <div key={i}>
        <img src={num} alt={`${num}`}></img>
      </div>
    ))

  const [viewGallery, setViewGallery] = useState(false)
  const buttonRef = useRef(null)

  const galleryHandler = () => {
    if (buttonRef.current) {
      setViewGallery(true)
    } else {
      setViewGallery(false)
    }
  }

  const sliderSettings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    initialSlide: 0,
    fade: true,
  }

  return (
    <>
      <div className="container h-800">
        {viewGallery && (
          <div>
            <div className="transition-all absolute h-auto top-30">
              <Slider
                className={`${
                  viewGallery ? 'z-50' : 'z-0'
                } opacity-100 absolute max-w-screen-lg top-0 left-0`}
                {...sliderSettings}
              >
                {imageSlider()}
              </Slider>
            </div>
          </div>
        )}
        <button onClick={() => galleryHandler()} ref={buttonRef}>
          <div
            className={`container ${
              viewGallery ? 'opacity-5' : 'opacity-100'
            } transition-all`}
          >
            <div className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-4">
              <img
                className="object-fill row-span-2 col-span-2 text-white text-3xl"
                src={image1}
                alt="image1"
              ></img>
              <img
                className="object-fill col-end-4 text-white text-3xl"
                src={image2}
                alt="image2"
              ></img>
              <img
                className="object-fill col-end-4 text-white text-3xl"
                src={image3}
                alt="image3"
              ></img>
            </div>
          </div>
        </button>
      </div>
    </>
  )
}

export default ImageViewer
