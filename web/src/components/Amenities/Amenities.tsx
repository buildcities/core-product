import React from 'react'
import DrinksAndSnacks from './DrinksAndSnacks/DrinksAndSnacks'
import Furniture from './Furniture/Furniture'
import Tech from './Tech/Tech'

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
      <span
        className={`${
          sliderVisible && window.innerWidth > 1024
            ? 'opacity-5'
            : 'opacity-100'
        } w-full mb-4 mt-2 lg:mt-4 text-3xl lg:text-5xl text-white font-sans font-bold whitespace-nowrap`}
      >
        Amenities in this place
      </span>
      <DrinksAndSnacks
        sliderVisible={sliderVisible}
        Snacks={Snacks}
        TeaKettle={TeaKettle}
        CoffeeMachines={CoffeeMachines}
        CoffeeCup={CoffeeCup}
        TeaKettleNoIcon={TeaKettleNoIcon}
        SnacksNoIcon={SnacksNoIcon}
        KitchenNoIcon={KitchenNoIcon}
      />
      <Tech
        sliderVisible={sliderVisible}
        AdaptersAndChargers={AdaptersAndChargers}
        Monitor={Monitor}
        AirConditioner={AirConditioner}
        TV={TV}
        TeaKettleNoIcon={TeaKettleNoIcon}
      />
      <Furniture
        sliderVisible={sliderVisible}
        HighChairs={HighChairs}
        BigDesks={BigDesks}
        EquippedKitchen={EquippedKitchen}
        TeaKettleNoIcon={TeaKettleNoIcon}
      />
    </>
  )
}

export default Amenities
