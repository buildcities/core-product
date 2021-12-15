// import { useState } from 'react'

type CheckboxProps = {
  day: string
}
const Checkbox = ({ day }: CheckboxProps) => {
  return (
    <div className="flex items-center w-24 h-min">
      <input
        className=" appearance-none h-4 w-4 border rounded-sm bg-[#171717] checked:bg-[#7B61FF] focus:hover:bg-[#7B61FF] checked:border-[#7B61FF] focus:outline-none focus:shadow-none transition duration-300 align-top bg-no-repeat bg-center bg-contain float-left mr-2.5 cursor-pointer"
        type="checkbox"
        style={{ boxShadow: 'none' }}
        value=""
        id={`${day}-24hrs`}
      />
      <label className="text-sm h-min text-[#969696]" htmlFor={`${day}-24hrs`}>
        24h open
      </label>
    </div>
  )
}

export default Checkbox
