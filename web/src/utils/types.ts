/* eslint-disable @typescript-eslint/no-explicit-any */
//import { amenitiesProps } from 'src/components/ListHubsStep3/presets'
import { amenitiesProps } from 'src/components/ListHubs/ListHubsStep3/presets'
import { TUpdateStepDataActionProps } from './stores/hubStepsStore'

export type TListHubsComponentProps = {
  stepId?: number
  data?: Record<string, unknown>
  updateStepData?: (payload: TUpdateStepDataActionProps) => void
  onFormSubmit?: () => void
}

export type ThubListData = {
  name?: string
  location?: string
  type?: { estate?: string; seats?: string | number }
  amenities?: amenitiesProps
  images?: string | []
  availability?: Record<string, undefined>
  rules?: { default?: string[]; custom: 'string' }
}

export type TUserNav = {
  name: string
  href?: string
  as?: any
  onClick?: () => void
}
