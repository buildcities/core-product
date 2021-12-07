import { ListHubStepProps } from '@buildcities/build-ui.ui.base.steps'
import { routes, Link } from '@redwoodjs/router'
import { ThubListData } from './types'

export interface TListHubsSteps extends ListHubStepProps {
  data?: ThubListData
}

export const listHubsSteps: TListHubsSteps[] = [
  {
    name: '1. Welcome',
    icon: 'flag',
    status: 'upcoming',
    route: routes?.listHubs({ stepId: 0 }),
    as: Link,
    data: { type: { estate: '', seats: 0 } },
  },
  {
    name: '2. Property type',
    icon: 'home',
    status: 'upcoming',
    route: routes?.listHubs({ stepId: 1 }),
    as: Link,
    data: { type: { estate: '', seats: 0 } },
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
