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

const Amenities = () => {
  return (
    <>
      <div className="w-full">
        <span className="block text-white text-xs">Drinks and Snacks</span>
        <div className="flex mt-1 space-x-2">
          <div>
            <Snacks />
          </div>
          <div>
            <TeaKettle />
          </div>
          <div>
            <CoffeeMachines />
          </div>
        </div>
      </div>
      <div className="w-full mt-6">
        <span className="flex text-white text-xs">Tech</span>
        <div className="flex mt-1 space-x-2">
          <div>
            <Monitor />
          </div>
          <div className="relative">
            <AirConditioner />
          </div>
          <div className="relative">
            <TV />
          </div>
          <div className="relative">
            <AdaptersAndChargers />
          </div>{' '}
        </div>
      </div>
      <div className="w-full mt-6">
        <span className="flex text-white text-xs">Furniture</span>
        <div className="flex mt-1 space-x-2">
          <div>
            <BigDesks />
          </div>
          <div>
            <HighChairs />
          </div>
          <div>
            <EquippedKitchen />
          </div>
        </div>
      </div>
    </>
  )
}

export default Amenities
