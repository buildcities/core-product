type ToggleSwitchProps = {
  day: string
  closed: boolean
  setClosed: React.Dispatch<React.SetStateAction<boolean>>
}
const ToggleSwitch = ({ day, closed, setClosed }: ToggleSwitchProps) => {
  return (
    <>
      <div className="flex items-center justify-start w-24">
        <label
          htmlFor={`open-${day}`}
          className="flex items-center cursor-pointer"
        >
          <div className="relative">
            <input
              id={`open-${day}`}
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
          <span
            className={`${
              closed ? 'text-white' : 'text-[#969696]'
            } ml-3 text-sm transition-colors duration-300`}
          >
            {closed ? 'Open' : 'Closed'}
          </span>
        </label>
      </div>
    </>
  )
}

export default ToggleSwitch
