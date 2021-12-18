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
  KitchenNoIcon,
  TeaKettleNoIcon,
  SnacksNoIcon,
  CoffeeCup,
} from 'src/utils/svgs/index'

export type AmenitiesProps = {
  sliderVisible?: boolean
}

const Amenities = ({ sliderVisible }) => {
  return (
    <>
      <div className="hidden lg:block">
        <span
          className={`${
            sliderVisible ? 'opacity-5' : 'opacity-100'
          } w-full mb-4 mt-4 text-3xl lg:text-5xl text-white font-sans font-bold whitespace-nowrap`}
        >
          Amenities in this place
        </span>
        <div
          className={`container ${
            sliderVisible ? 'opacity-5' : 'opacity-100'
          } transition-all w-full`}
        >
          <span className="block text-white sans-fira text-xs mt-4">
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
      </div>

      <div className="bg-slate-800 block rounded-md pt-10 lg:hidden">
        <div className="pl-10 pt-4 pb-4">
          <div className="block">
            <CoffeeCup />
          </div>
          <div className="block mt-4">
            <span className="text-sm font-sans text-white mb-4">
              Drinks and snacks
            </span>
          </div>
          <div className="inline-flex mt-4 space-x-4">
            <KitchenNoIcon />
            <TeaKettleNoIcon />
            <SnacksNoIcon />
          </div>
        </div>
      </div>
    </>
  )
}

export default Amenities
