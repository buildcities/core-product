import React from 'react'
import { FilterButton } from '@buildcities/build-ui.components.all'
import { RESERVATION_BUTTON_TEXT, PROPERTIES_BUTTON_TEXT } from './presets'

export default function ReservationFilters() {
  return (
    <div className="flex space-x-4 sm:space-x-7">
      <FilterButton type="normal" label={RESERVATION_BUTTON_TEXT} />
      <FilterButton type="normal" label={PROPERTIES_BUTTON_TEXT} />
    </div>
  )
}
