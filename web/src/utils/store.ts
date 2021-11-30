import { atom } from 'jotai'
import { atomFamily, splitAtom } from 'jotai/utils'
import { listHubsSteps } from './presets'

export const listHubsStepsAtom = atom(listHubsSteps)

export const listHubsFamily = atomFamily(
  (key: number) => listHubsStepsAtom[key]
)
