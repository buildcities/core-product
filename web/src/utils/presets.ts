import { ListHubStepProps } from '@buildcities/build-ui.ui.base.steps'

export interface TListHubsSteps extends ListHubStepProps {
  data?: Record<string, unknown>
}

export const listHubsSteps: TListHubsSteps[] = [
  {
    current: true,
    name: '1. Welcome',
    icon: 'flag',
    status: 'upcoming',
    data: {},
  },
  {
    current: false,
    name: '2. Property type',
    icon: 'home',
    status: 'upcoming',
    data: {},
  },
  {
    current: false,
    name: '3. Amenities',
    icon: 'bed',
    status: 'upcoming',
    data: {},
  },
  {
    current: false,
    name: '4. Photos',
    icon: 'images',
    status: 'upcoming',
    data: {},
  },
  {
    current: false,
    name: '5. Dates',
    icon: 'calendar',
    status: 'upcoming',
    data: {},
  },
  {
    current: false,
    name: '6. Rules',
    icon: 'list',
    status: 'upcoming',
    data: {},
  },
  {
    current: false,
    name: '7. Final steps',
    icon: 'trophy',
    status: 'upcoming',
    data: {},
  },
]
