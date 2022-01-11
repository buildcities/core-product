import { FilterButtonProps } from '@buildcities/build-ui.components.all'

export const AMENITIES_SECTION_TITLE = 'What amenities are offered?'
export const AMENITIES_SECTION_TEXT =
  '> 100 MBPS WiFi speed must be standard to qualify as a build_hub.  Check all additional amenities for your prospective build_hub here.'

export const ADD_AMENITIES_SECTION_TITLE = 'Add more amenities'
export const ADD_AMENITIES_SECTION_TEXT = 'Use earch bellow and add more.'

export type amenitiesProps = {
  refreshments?: FilterButtonProps[] | string[]
  tech?: FilterButtonProps[] | string[]
  furniture?: FilterButtonProps[] | string[]
  other?: FilterButtonProps[] | string[]
  custom?: FilterButtonProps[] | string[]
}

export const amenities: amenitiesProps = {
  refreshments: [
    { label: 'Tea kettle' },
    { label: 'Snacks' },
    { label: 'Coffee machine' },
  ],
  tech: [
    { label: 'Monitor' },
    { label: 'Airconditioning' },
    {
      label: 'Adapters and chargers',
    },
    { label: 'Tv' },
    { label: 'Printers' },
  ],
  furniture: [
    { label: 'Big desks' },
    { label: 'Equipped kitchen' },
    { label: 'High chairs' },
    {
      label: 'Standing desks',
    },
  ],
  other: [
    { label: 'Pet friendly environment' },
    { label: 'Office supplies' },
    { label: 'Free parking' },
    {
      label: 'A barbecue grill',
    },
  ],
  custom: [],
}
