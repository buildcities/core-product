import React, { useState, useRef, useEffect } from 'react'
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

export type ImageViewerProps = {
  sliderVisible?: boolean
}

const ImageViewer = (): JSX.Element => {
  const [viewGallery, setViewGallery] = useState(false)
  const buttonRef = useRef(null)
  const imageRef = useRef(null)
  const imageSlider = () =>
    [image1, image5, image7, image4, image6].map((num, i) => (
      <div key={i} className="rounded-lg">
        <img
          className="aspect-square m-auto h-full w-auto object-fill rounded-lg"
          src={num}
          alt={`${num}`}
        ></img>
      </div>
    ))

  const mouseClickHandler = (event) => {
    if (buttonRef && !buttonRef.current.contains(event.target)) {
      // imageRef.current.innerSlider.list.parentElement.classList.remove(
      //   'slick-slider'
      // )
      const slider = document.querySelectorAll('.slick-slider')
      slider.forEach((o) => o.classList.remove('.slick-slider'))
    }
  }

  useEffect(() => {
    window.addEventListener('mousedown', (event) => mouseClickHandler(event))
    return () =>
      window.removeEventListener('mousedown', (event) =>
        mouseClickHandler(event)
      )
  }, [])

  const galleryHandler = () => {
    if (buttonRef.current) {
      setViewGallery(true)
    } else {
      setViewGallery(false)
    }
  }

  const sliderSettingsDesktop = {
    arrows: true,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
    initialSlide: 0,
    fade: true,
    draggable: true,
  }

  const sliderSettingsMobile = {
    arrows: false,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
    initialSlide: 0,
    fade: true,
    autoplay: true,
    touchMove: true,
  }

  return (
    <>
      <div className="container hidden lg:block">
        {viewGallery && (
          <div className="transition-all lg:w-screen lg:m-30h-auto top-30 fixed items-stretch">
            <Slider
              ref={imageRef}
              className={`${
                viewGallery ? 'z-50' : 'z-0'
              } transition-all flex items-stretch opacity-100 absolute h-full lg:max-w-screen-lg top-0 left-0`}
              {...sliderSettingsDesktop}
            >
              {imageSlider()}
            </Slider>
          </div>
        )}
        <button onClick={() => galleryHandler()} ref={buttonRef}>
          <div
            className={`container ${
              viewGallery ? 'opacity-5' : 'opacity-100'
            } transition-all`}
          >
            <div className="grid w-full grid-cols-1 grid-flow-row lg:grid-rows-2 lg:grid-cols-3 lg:grid-flow-col gap-4">
              <img
                className="transition-all h-full object-fill lg:row-span-2 lg:col-span-2 text-white text-3xl hover:border-3 hover:border-slate-600 rounded-lg"
                src={image1}
                alt="image1"
              ></img>
              <img
                className="transition-all hidden lg:block object-fill w-full lg:col-end-4 text-white text-3xl hover:border-3 hover:border-gray-600 rounded-lg"
                src={image2}
                alt="image2"
              ></img>
              <img
                className="transition-all hidden lg:block object-fill w-full lg:col-end-4 text-white text-3xl hover:border-3 hover:border-slate-600 rounded-lg"
                src={image3}
                alt="image3"
              ></img>
            </div>
          </div>
        </button>
      </div>
      <div className="relative lg:hidden transition-all lg:w-screen lg:m-30h-auto top-30 fixed items-stretch">
        <Slider
          ref={imageRef}
          className={`${
            viewGallery ? 'z-50' : 'z-0'
          } transition-all flex items-stretch opacity-100 absolute h-full lg:max-w-screen-lg top-0 left-0`}
          {...sliderSettingsMobile}
        >
          {imageSlider()}
        </Slider>
      </div>
    </>
  )
}

export default ImageViewer
