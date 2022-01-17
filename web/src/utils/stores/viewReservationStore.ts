import create from 'zustand'
import { produce } from 'immer'

interface TStore {
  selectedView?: 'Reservations' | 'My Properties'
  setFilter: (view: string) => void
}

export const useStore = create<TStore>((set) => ({
  selectedView: 'Reservations',
  setFilter: (view) =>
    set(
      produce((draft) => {
        draft.selectedView = view
      })
    ),
}))
