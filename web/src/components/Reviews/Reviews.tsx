import React from 'react'

export type AmenitiesProps = {
  sliderVisible?: boolean
}

const Reviews = ({ sliderVisible }) => {
  return (
    <>
      <div>
        <span
          className={`${
            sliderVisible ? 'opacity-5' : 'opacity-100'
          } w-full block lg:hidden mb-4 lg:mt-4 text-3xl lg:text-5xl text-white font-sans font-bold whitespace-nowrap`}
        >
          Last reviews
        </span>
      </div>
      <div className="bg-[#171717] block rounded-lg mt-1 pt-2 lg:hidden">
        <div className="pl-4 pt-3 pb-3">
          <div className="block">
            <span className="text-md font-sans text-white mb-4 text-bold text-sm">
              0x0002...0323
            </span>
          </div>
          <div>
            <p className="text-white mt-4 text-sm">
              Super expérience ! Le cocon est une petite bulle qui suspend le
              temps, le temps d’une nuit ! Je recommande les yeux rivés sur les
              étoiles....
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#171717] block rounded-lg mt-1 pt-2 lg:hidden">
        <div className="pl-4 pt-3 pb-3">
          <div className="block">
            <span className="text-md font-sans text-white mb-4 text-bold text-sm">
              0x0002...0323
            </span>
          </div>
          <div>
            <p className="text-white mt-4 text-sm">
              Super expérience ! Le cocon est une petite bulle qui suspend le
              temps, le temps d’une nuit ! Je recommande les yeux rivés sur les
              étoiles....
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reviews
