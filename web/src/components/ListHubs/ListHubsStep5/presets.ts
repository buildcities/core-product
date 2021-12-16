import { RadioOptionProps } from '@buildcities/build-ui.ui.base.radio-group'

export const AVAILABILITY_SECTION_TITLE = 'Availability'

export const AVAILABILITY_SECTION_TEXT =
  'Select your availability of when your build_hub is open.'

export const CUSTOM_SECTION_TITLE = 'Custom selection'
export const CUSTOM_SECTION_TEXT = 'Select dates when your hub_ is not open.'

export const radioOptions: RadioOptionProps[] = [
  {
    label: 'working 24/7',
    icon: 'clock',
  },
  { label: 'Not working on weekend', icon: 'calendar' },
  { label: 'Closed on public holidays', icon: 'wine' },
]

export const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
