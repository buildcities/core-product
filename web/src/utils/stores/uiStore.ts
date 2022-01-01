import produce from 'immer'
import create from 'zustand'

interface TStore {
  isAdminMode: boolean
  toggleMode: () => void
}

export const useStore = create<TStore>((set) => ({
  isAdminMode: false,
  toggleMode: () =>
    set(
      produce((draft) => {
        draft.isAdminMode = !draft.isAdminMode
      })
    ),
}))
