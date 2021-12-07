import { listHubsSteps, TListHubsSteps } from '../presets'
import create from 'zustand'
import { produce } from 'immer'
import { merge } from 'lodash'
import { ThubListData } from '../types'

export type TUpdateStepDataActionProps = {
  stepId: number
  data?: Record<string, unknown>
  status?: 'upcoming' | 'current' | 'complete'
}

interface TStore {
  listHubsSteps: TListHubsSteps[]
  stepId?: number
  isBusy?: boolean
  updateStepData: ({ stepId, data, status }: TUpdateStepDataActionProps) => void
  getStepsData: () => ThubListData
  setIsBusy: (isBusy: boolean) => void
}

export const useStore = create<TStore>((set, get) => ({
  listHubsSteps,
  getStepsData: () =>
    get().listHubsSteps.reduce((acc, val) => {
      return { ...acc, ...val.data }
    }, {}),
  updateStepData: (props) =>
    set(
      produce((draft) => {
        if (props.data) {
          draft.listHubsSteps[props.stepId].data = merge({}, { ...props.data })
        }
        if (props.status) {
          draft.listHubsSteps[props.stepId].status = props.status
        }
        draft.stepId = props.stepId
      })
    ),
  setIsBusy: (isBusy) => {
    set(
      produce((draft) => {
        draft.isBusy = isBusy
      })
    )
  },
}))
