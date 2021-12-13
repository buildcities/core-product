import { Paragraph } from '@buildcities/build-ui.components.all'
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
        'flex justify-between py-2 md:px-[60px] lg:px-[110px] px-5 opacity-75 w-full items-center',
        className
      )}
    >
      <RadioGroup
        inputProps={{ onChange: setFilter }}
        containerClass="hidden md:flex"
      >
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
      <div className="flex">
        <Paragraph className="pr-2 text-mainText" text="Map View" />
        <FilterToggle />
      </div>
    </div>
  )
}

export default HubFilters
