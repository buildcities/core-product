import { continents } from '../presets'
import create from 'zustand'
import { produce } from 'immer'

interface TStore {
  continents: string[]
  selectedContinent?: string
  isMapView: boolean
  isBusy?: boolean
  setFilter: (continent: string) => void
  toggleView: (view: boolean) => void
}

export const useStore = create<TStore>((set) => ({
  continents,
  isMapView: true,
  setFilter: (continent) =>
    set(
      produce((draft) => {
        draft.selectedContinent = continent
      })
    ),
  toggleView: (view) =>
    set(
      produce((draft) => {
        draft.isMapView = view
      })
    ),
}))
