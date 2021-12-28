import produce from 'immer'
import { Hub } from 'types/graphql'
import create from 'zustand'

interface TStore {
  selectedHub?: Hub
  checkInDate: moment.Moment | null
  checkOutDate: moment.Moment | null
  setSelectedHub: (hub: Hub) => void
  setBookingDate: (
    checkInDate?: moment.Moment,
    checkOutDate?: moment.Moment
  ) => void
}

export const useStore = create<TStore>((set) => ({
  checkInDate: null,
  checkOutDate: null,
  selectedHub: null,
  setSelectedHub: (hub) =>
    set(
      produce((draft) => {
        draft.selectedHub = hub
      })
    ),
  setBookingDate: (checkInDate, checkOutDate) =>
    set(
      produce((draft) => {
        if (checkInDate) {
          draft.checkInDate = checkInDate
        }
        if (checkOutDate) {
          draft.checkOutDate = checkOutDate
        }
      })
    ),
}))
