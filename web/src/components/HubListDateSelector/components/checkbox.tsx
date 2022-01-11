// import { useState } from 'react'
import { CheckboxField, Label } from '@redwoodjs/forms'
type CheckboxProps = {
  day: string
}
const TwentyFourHRSelector = ({ day }: CheckboxProps) => {
  return (
    <div className="flex items-center justify-center text-sm w-24 ">
      <CheckboxField
        className=" appearance-none h-4 w-4 border rounded-sm bg-[#171717] checked:bg-selected focus:hover:bg-selected checked:border-selected focus:outline-none focus:shadow-none transition duration-300 align-top bg-no-repeat bg-center bg-contain float-left mr-2.5 cursor-pointer"
        style={{ boxShadow: 'none' }}
        name={`availability.${day}.is24Hrs`}
      />
      <Label
        className="h-min w-max flex-shrink-0 text-paragraph"
        name={`availability.${day}.is24Hrs`}
      >
        Open 24h
      </Label>
    </div>
  )
}

export default TwentyFourHRSelector
