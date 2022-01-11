import { Switch } from '@headlessui/react'
import classNames from 'classnames'

export type FilterToggleProps = {
  setActive?: React.Dispatch<React.SetStateAction<boolean>>
  isActive?: boolean
  srLabel?: string
}

export default function FilterToggle({
  setActive,
  isActive,
  srLabel,
}: FilterToggleProps) {
  //const { isActive, setActive } = useState()
  return (
    <Switch
      checked={isActive}
      onChange={setActive}
      className="flex-shrink-1 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none"
    >
      <span className="sr-only">{srLabel}</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bg-transparent w-full h-full rounded-md"
      />
      <span
        aria-hidden="true"
        className={classNames(
          isActive ? 'bg-selected' : 'bg-[#323232]',
          'pointer-events-none absolute opacity-40 h-4 w-10 mx-auto rounded-full transition-colors ease-in-out duration-200'
        )}
      />
      <span
        aria-hidden="true"
        className={classNames(
          isActive
            ? 'translate-x-5 bg-selected border-transparent'
            : 'translate-x-0 bg-white border-gray-200',
          'pointer-events-none absolute left-0 inline-block h-6 w-6 border rounded-full  shadow transform ring-0 transition-transform ease-in-out duration-200'
        )}
      />
    </Switch>
  )
}
