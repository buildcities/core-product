import { SelectInputProps } from '@buildcities/build-ui.ui.base.select-input'

export const LOCATION_SECTION_TITLE = 'Location'
export const LOCATION_SECTION_TEXT =
  'Only build_citizens will be able to see the exact address of the build_hub at the time of approved reservation.'

export const HUB_TYPE_SECTION_TITLE = 'Type of build_hub'
export const HUB_TYPE_SECTION_TEXT =
  'Choose category that best fits your prospective build_hub.“Other” can be explained in the build_ Discord server'

export const hubTypes = [
  { label: 'Office', value: 'office' },
  { label: 'Warehouse', value: 'warehouse' },
  { label: 'Factory', value: 'factory' },
  { label: 'Residential', value: 'residential' },
]
