import { amenitiesProps } from 'src/components/ListHubsStep3/presets'
import { TUpdateStepDataActionProps } from './stores/hubStepsStore'

export type TListHubsComponentProps = {
  stepId?: number
  data?: Record<string, unknown>
  updateStepData?: (payload: TUpdateStepDataActionProps) => void
  onFormSubmit?: () => void
}

export type ThubListData = {
  location?: string
  type?: { estate?: string; seats?: string | number }
  amenities?: amenitiesProps
  images?: string | []
  availability?: string
  rules?: { default?: string[]; custom: 'string' }
}
