import React from 'react'
import { RadioGroup, RadioOption } from 'src/components/bit.dev/radio-group'
import { useStore } from 'src/utils/stores/viewReservationStore'
import ReservationSelectionButton from './reservation-selection-button'

export default function Component() {
  const { selectedView, setFilter } = useStore((store) => ({
    setFilter: store.setFilter,
    selectedView: store.selectedView,
  }))
  return (
    <div>
      <RadioGroup
        inputProps={{ onChange: setFilter, value: selectedView }}
        containerClass="hidden md:flex"
      >
        <>
          <RadioOption key={'reservations'} label={'Reservations'}>
            {({ checked, label }) => (
              <ReservationSelectionButton selected={checked} text={label} />
            )}
          </RadioOption>
          <RadioOption key={'my-properties'} label={'My Properties'}>
            {({ checked, label }) => (
              <ReservationSelectionButton selected={checked} text={label} />
            )}
          </RadioOption>
        </>
      </RadioGroup>
    </div>
  )
}
