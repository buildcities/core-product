import React, { Component } from 'react'

export type ImageViewerProps = {
  sliderVisible?: boolean
  HighChairs?: Component
  BigDesks?: Component
  EquippedKitchen?: Component
  TeaKettleNoIcon?: Component
}

const Furniture = ({
  sliderVisible,
  HighChairs,
  BigDesks,
  EquippedKitchen,
  TeaKettleNoIcon,
}) => {
  return (
    <>
      <div className="hidden lg:flex">
        <div
          className={`container ${
            sliderVisible ? 'opacity-5' : 'opacity-100'
          } transition-all w-full mt-6`}
        >
          <span className="flex text-white sans-fira text-xs">Furniture</span>
          <div className="flex mt-1 space-x-2">
            <a href="_blank">
              <BigDesks />
            </a>
            <a href="_blank">
              <HighChairs />
            </a>
            <a href="_blank">
              <EquippedKitchen />
            </a>
          </div>
        </div>
      </div>

      {/* <div className="bg-[#171717] block rounded-lg mt-2 pt-4 lg:hidden">
        <div className="pl-4 pt-3 pb-3">
          <div className="block">
            <TeaKettleNoIcon />
          </div>
          <div className="block mt-4">
            <span className="text-md font-sans text-white mb-4">Furniture</span>
          </div>
          <div className="inline-flex mt-4 rounded-lg space-x-2">
            <HighChairs />
            <BigDesks />
            <EquippedKitchen />
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Furniture
