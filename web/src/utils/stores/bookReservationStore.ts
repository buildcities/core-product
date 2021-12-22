import produce from 'immer'
import create from 'zustand'

interface TStore {
  checkInDate: moment.Moment | null
  checkOutDate: moment.Moment | null
  setBookingDate: (
    checkInDate?: moment.Moment,
    checkOutDate?: moment.Moment
  ) => void
}

export const useStore = create<TStore>((set) => ({
  checkInDate: null,
  checkOutDate: null,
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
