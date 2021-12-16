import React from 'react'
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

    [image1, image2, image3].map((num, i) => (
      <div key={i}>
        <img src={num} alt={`${num}`}></img>
      </div>
    ))

  const sliderSettings = {
    className: 'slider variable-width',
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
  }

  return (
    <div className="relative w-full h-full inline-flex space-x-4">
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
  )
}

// {/* <Slider {...sliderSettings}>{imageSlider()}</Slider>) */}

export default ImageViewer
