import { SelectButtonProps } from '@buildcities/build-ui.components.all'

export const AMENITIES_SECTION_TITLE = 'What amenities are offered?'
export const AMENITIES_SECTION_TEXT =
  '> 100 MBPS WiFi speed must be standard to qualify as a build_hub.  Check all additional amenities for your prospective build_hub here.'

export const ADD_AMENITIES_SECTION_TITLE = 'Add more amenities'
export const ADD_AMENITIES_SECTION_TEXT = 'Use earch bellow and add more.'

export type amenitiesProps = {
  refreshments: SelectButtonProps[]
  tech: SelectButtonProps[]
  furniture: SelectButtonProps[]
  other: SelectButtonProps[]
}

export const amenities: amenitiesProps = {
  refreshments: [
    { label: 'Tea kettle', icon: 'cafe' },
    { label: 'Snacks  ', icon: 'pizza' },
    { label: 'Coffee machine  ', icon: 'cafe' },
  ],
  tech: [
    { label: 'Monitor', icon: 'desktop' },
    { label: 'Airconditioner', icon: 'snow' },
    {
      label: 'Adapters and chargers',

      icon: 'battery-charging',
    },
    { label: 'Tv', icon: 'tv' },
    { label: 'Printers', icon: 'print' },
  ],
  furniture: [
    { label: 'Big desks', icon: 'cafe' },
    { label: 'Equiped kitchen', icon: 'restaurant' },
    { label: 'High chairs', icon: 'cafe' },
    {
      label: 'Standing desks',

      icon: 'cafe',
    },
  ],
  other: [
    { label: 'Pet friendly environment', icon: 'paw' },
    { label: 'Office supplies', icon: 'filing' },
    { label: 'Free parking', icon: 'car' },
    {
      label: 'A barbecue grill',

      icon: 'grid',
    },
  ],
}
