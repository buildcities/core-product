import { useState } from 'react'

const PublicHolidayToggleSwitch = () => {
  const [closed, setClosed] = useState(false)

  return (
    <>
      <div className="absolute right-0 -top-9 flex items-center justify-start">
        <span
          className={`${
            closed ? 'text-white' : 'text-[#969696]'
          } mr-6 text-sm transition-colors duration-300`}
        >
          Closed on public holidays
        </span>
        <label
          htmlFor="public-holidays"
          className="flex items-center cursor-pointer"
        >
          <div className="relative">
            <input
              id={`public-holidays`}
              type="checkbox"
              className="sr-only"
              checked={closed}
              onClick={() => setClosed((closed) => !closed)}
            />
            <div
              className={`${
                closed ? 'bg-[#7B61FF]' : 'bg-[#323232]'
              } w-10 h-4 rounded-full shadow-inner bg-opacity-40 transition-all duration-300`}
            ></div>
            <div
              className={`${
                closed ? 'left-4 bg-[#7B61FF]' : 'bg-[#969696] -left-1'
              } transform absolute transition-all duration-300 w-6 h-6 rounded-full shadow -top-1`}
            ></div>
          </div>
        </label>
      </div>
    </>
  )
}

export default PublicHolidayToggleSwitch
