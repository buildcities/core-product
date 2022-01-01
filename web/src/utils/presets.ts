import { ListHubStepProps } from '@buildcities/build-ui.ui.base.steps'
import { routes, Link } from '@redwoodjs/router'
import { ThubListData } from './types'

export interface TListHubsSteps extends ListHubStepProps {
  data?: ThubListData
  onClick?: () => void
}

export const editHubListSteps: TListHubsSteps[] = [
  {
    name: '1. Property type',
    icon: 'home',
    status: 'upcoming',
    route: null,
    as: 'button',
    data: undefined,
  },
  {
    name: '2. Amenities',
    icon: 'bed',
    status: 'upcoming',
    route: null,
    as: 'button',
    data: undefined,
  },
  {
    name: '3. Photos',
    icon: 'images',
    status: 'upcoming',
    route: null,
    as: 'button',
    data: undefined,
  },
  {
    name: '4. Dates',
    icon: 'calendar',
    status: 'upcoming',
    route: null,
    as: 'button',
    data: undefined,
  },
  {
    name: '5. Rules',
    icon: 'list',
    status: 'upcoming',
    route: null,
    as: 'button',
    data: undefined,
  },
]

export const listHubsSteps: TListHubsSteps[] = [
  {
    name: '1. Welcome',
    icon: 'flag',
    status: 'upcoming',
    route: routes?.listHubs({ stepId: 0 }),
    as: Link,
    data: undefined,
  },
  {
    name: '2. Property type',
    icon: 'home',
    status: 'upcoming',
    route: routes?.listHubs({ stepId: 1 }),
    as: Link,
    data: { type: { estate: '', seats: undefined } },
  },
  {
    name: '3. Amenities',
    icon: 'bed',
    status: 'upcoming',
    route: routes?.listHubs({ stepId: 2 }),
    as: Link,
    data: {},
  },
  {
    name: '4. Photos',
    icon: 'images',
    status: 'upcoming',
    route: routes?.listHubs({ stepId: 3 }),
    as: Link,
    data: {},
  },
  {
    name: '5. Dates',
    icon: 'calendar',
    status: 'upcoming',
    route: routes?.listHubs({ stepId: 4 }),
    as: Link,
    data: {},
  },
  {
    name: '6. Rules',
    icon: 'list',
    status: 'upcoming',
    route: routes?.listHubs({ stepId: 5 }),
    as: Link,
    data: {},
  },
  {
    name: '7. Final steps',
    icon: 'trophy',
    status: 'upcoming',
    route: routes?.listHubs({ stepId: 6 }),
    as: Link,
    data: {},
  },
]
export const continents = [
  'Asia',
  'Europe',
  'North America',
  'South America',
  'Antartica',
  'Africa',
  'Oceania',
]
