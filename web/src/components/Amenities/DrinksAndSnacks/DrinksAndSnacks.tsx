import React, { Component } from 'react'

export type TechProps = {
  sliderVisible?: boolean
  CoffeeMachines?: Component
  TeaKettle?: Component
  Snacks?: Component
  CoffeeCup?: boolean
  TeaKettleNoIcon?: Component
  SnacksNoIcon?: Component
  KitchenNoIcon?: Component
}

const Furniture = ({
  sliderVisible,
  Snacks,
  TeaKettle,
  CoffeeMachines,
  CoffeeCup,
  TeaKettleNoIcon,
  SnacksNoIcon,
  KitchenNoIcon,
}) => {
  return (
    <>
      <div className="hidden lg:flex">
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
      </div>

      <div className="bg-[#171717] block rounded-lg mt-2 pt-4 lg:hidden">
        <div className="pl-4 pt-3 pb-3">
          <div className="block">
            <CoffeeCup />
          </div>
          <div className="block mt-4">
            <span className="text-md font-sans text-white mb-4">
              Drinks and snacks
            </span>
          </div>
          <div className="inline-flex mt-4 rounded-lg space-x-2">
            <TeaKettleNoIcon />
            <SnacksNoIcon />
            <KitchenNoIcon />
          </div>
        </div>
      </div>
    </>
  )
}

export default Furniture
