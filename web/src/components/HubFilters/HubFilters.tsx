import classnames from 'classnames'
import { RadioGroup, RadioOption } from 'src/components/bit.dev/radio-group'
import { useStore } from 'src/utils/stores/viewHubsStore'
import { FilterButton, FilterToggle } from './components'

type HubFiltersProps = {
  className?: string
  filters?: string[]
}

const HubFilters = ({ className, filters }: HubFiltersProps) => {
  const setFilter = useStore((store) => store.setFilter)
  return (
    <div
      className={classnames(
        'flex justify-between py-2 px-[120px] opacity-75 w-full items-center',
        className
      )}
    >
      <RadioGroup inputProps={{ onChange: setFilter }} containerClass="flex">
        {filters?.length &&
          filters.map((item) => {
            return (
              <RadioOption key={item} label={item}>
                {({ checked, label }) => (
                  <FilterButton key={item} isActive={checked} text={label} />
                )}
              </RadioOption>
            )
          })}
      </RadioGroup>
      <FilterToggle />
    </div>
  )
}

export default HubFilters
