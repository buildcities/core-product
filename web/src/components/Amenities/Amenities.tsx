import React from 'react'
import {
  AdaptersAndChargers,
  AirConditioner,
  HighChairs,
  Monitor,
  Snacks,
  TV,
  BigDesks,
  CoffeeMachines,
  TeaKettle,
  EquippedKitchen,
} from 'src/utils/svgs/index'

export type AmenitiesProps = {
  sliderVisible?: boolean
}

const Amenities = ({ sliderVisible }) => {
  return (
    <>
      <div
        className={`container ${
          sliderVisible ? 'opacity-5' : 'opacity-100'
        } transition-all w-full`}
      >
        <span className="block text-white sans-fira text-xs">
          Drinks and Snacks
        </span>
        <div className="flex mt-1 space-x-2">
          <a href="_blank">
            <Snacks />
          </a>
          <a href="_blank">
            <TeaKettle />
          </a>
          <a href="_blank">
            <CoffeeMachines />
          </a>
        </div>
      </div>
      <div
        className={`container ${
          sliderVisible ? 'opacity-5' : 'opacity-100'
        } transition-all w-full mt-6`}
      >
        <span className="flex text-white sans-fira text-xs">Tech</span>
        <div className="flex mt-1 space-x-2">
          <a href="_blank">
            <Monitor />
          </a>
          <a href="_blank">
            <AirConditioner />
          </a>
          <a href="_blank">
            <TV />
          </a>
          <a href="_blank">
            <AdaptersAndChargers />
          </a>
        </div>
      </div>
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
    </>
  )
}

export default Amenities
