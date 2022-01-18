import { Paragraph } from '@buildcities/build-ui.components.all'
import classnames from 'classnames'
import { RadioGroup, RadioOption } from 'src/components/bit.dev/radio-group'
import { useStore } from 'src/utils/stores/viewHubsStore'
import { FilterButton, FilterToggle, MobileFilter } from './components'
const TEXT_TOGGLE = 'Map view'

type HubFiltersProps = {
  className?: string
  filters?: string[]
}

const HubFilters = ({ className, filters }: HubFiltersProps) => {
  const { setFilter, selectedContinent } = useStore((store) => ({
    setFilter: store.setFilter,
    selectedContinent: store.selectedContinent,
  }))
  return (
    <div
      className={classnames(
        'flex justify-between py-2 md:px-[60px]  lg:px-[110px] px-5 opacity-75 w-full items-start',
        className
      )}
    >
      <div>
        <MobileFilter className="md:hidden">
          <RadioGroup
            inputProps={{ onChange: setFilter, value: selectedContinent }}
            className="md:hidden w-[60px] space-y-2 mt-2"
          >
            {filters?.length &&
              filters.map((item) => {
                return (
                  <RadioOption key={item} label={item}>
                    {({ checked, label }) => (
                      <FilterButton
                        key={item}
                        isActive={checked}
                        text={label}
                      />
                    )}
                  </RadioOption>
                )
              })}
          </RadioGroup>
        </MobileFilter>
        <RadioGroup
          inputProps={{ onChange: setFilter, value: selectedContinent }}
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
      </div>
      <div className="flex mt-2">
        <Paragraph className="mr-2 text-mainText" text={TEXT_TOGGLE} />
        <FilterToggle />
      </div>
    </div>
  )
}

export default HubFilters
