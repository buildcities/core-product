/* eslint-disable @typescript-eslint/no-unused-vars */
import { listHubsSteps, editHubListSteps, TListHubsSteps } from '../presets'
import create from 'zustand'
import { produce } from 'immer'
import { merge, pick } from 'lodash'
import { ThubListData } from '../types'

export type TUpdateStepDataActionProps = {
  stepId: number
  data?: Record<string, unknown>
  status?: 'upcoming' | 'current' | 'complete'
}

const editHubSteps = editHubListSteps.map((item, indx) => {
  item.onClick = () => {
    console.log('clicked')
    return useStore.setState({ stepId: indx })
  }

  return item
})

interface TStore {
  getCurrentHubName: () => string
  listHubsSteps: TListHubsSteps[]
  stepId?: number
  isBusy?: boolean
  updateStepData: ({ stepId, data, status }: TUpdateStepDataActionProps) => void
  getStepsData: (ownerId: string) => ThubListData
  setStepsData: (data: ThubListData) => void
  setIsBusy: (isBusy: boolean) => void
  prepareStepsForEdit: () => void
  prepareSteps: () => void
  reset: (isEditMode: boolean) => void
}

export const useStore = create<TStore>((set, get) => ({
  listHubsSteps: listHubsSteps,
  prepareSteps: () => {
    set(
      produce((draft) => {
        draft.listHubsSteps = listHubsSteps
      })
    )
  },
  prepareStepsForEdit: () => {
    set(
      produce((draft) => {
        draft.listHubsSteps = editHubSteps
      })
    )
  },

  getCurrentHubName: () => {
    return get().listHubsSteps[1].data.name
  },
  getStepsData: (ownerId) =>
    get().listHubsSteps.reduce((acc, val) => {
      return { ...acc, ...val.data, ownerId }
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
  reset: (isEditMode: boolean) =>
    set(
      produce((draft) => {
        draft.listHubsSteps = listHubsSteps
      })
    ),
  setStepsData: (data) => {
    set(
      produce((draft) => {
        draft.listHubsSteps[0].data = pick(data, ['name', 'location', 'type'])
        draft.listHubsSteps[1].data = pick(data, ['amenities'])
        draft.listHubsSteps[2].data = pick(data, ['images'])
        draft.listHubsSteps[3].data = pick(data, ['availability'])
        draft.listHubsSteps[4].data = pick(data, ['rules'])
      })
    )
  },
}))
