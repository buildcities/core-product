import React, { useState, useEffect, useRef } from 'react'
import Slider from 'react-slick'
import image1 from 'src/pages/HubDetailPage/TestImages/image1.png'
import image2 from 'src/pages/HubDetailPage/TestImages/image2.png'
import image3 from 'src/pages/HubDetailPage/TestImages/image3.png'
import image4 from 'src/pages/HubDetailPage/TestImages/image4.png'
import image5 from 'src/pages/HubDetailPage/TestImages/image5.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ImageViewer = () => {
  const imageSlider = () =>
    // const images = [] // Assuming db images will be fulfilled in a variable here
    // for (let i = 0; i < images.length; i++) {
    //   console.log(`image${i}`)
    // }

    [image1, image2, image3, image4, image5].map((num, i) => (
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
  useEffect(() => {
    const slickSlider: any = document.querySelectorAll('.slick-slider')
    document.addEventListener('mousemove', () => {
      slickSlider.forEach((o) => (o.style.maxWidth = '800px'))
      return
    })
  }, [])

  // ;`{${open ? 'flex' : 'hidden'} <other classnames>}`

  // const mouseClickHandler = (event) => {
  //   if (buttonRef && !buttonRef.current.contains(event)) {
  //     setViewGallery(false)
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener('mousedown', (event) => mouseClickHandler(event))
  //   return () =>
  //     document.removeEventListener('mousedown', (event) =>
  //       mouseClickHandler(event)
  //     )
  // }, [])

  // useEffect(() => {
  //   buttonRef.current.classList.toggle('none')
  // }, [viewGallery])

  const sliderSettings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    initialSlide: 0,
    className: 'object-fill',
  }

  return (
    <div className="grid grid-cols-4 col-span-4">
      <button onClick={() => galleryHandler()} ref={buttonRef}>
        {!viewGallery ? (
          <div
            className={`${
              viewGallery ? 'none' : 'flex'
            } relative w-full h-full space-x-4`}
          >
            <div className="relative">
              <div className="object-cover">
                <img src={image1} alt="image1"></img>
              </div>
            </div>
            <div className="grid h-full space-y-4">
              <div className="relative h-full inline-flex top-0">
                <div className="object-fit">
                  <img src={image2} alt="image2"></img>
                </div>
              </div>
              <div className="relative h-full inline-flex bot-0">
                <div className="object-fit">
                  <img src={image3} alt="image3"></img>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="block w-32">
            <Slider {...sliderSettings}>{imageSlider()}</Slider>
          </div>
        )}
      </button>
    </div>
  )
}

export default ImageViewer