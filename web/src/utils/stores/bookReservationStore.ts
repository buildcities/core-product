import produce from 'immer'
import create from 'zustand'

interface TStore {
  hubImages?: { dataURL: string }[]
  hubTitle?: string
  hubLocation?: string
  checkInDate: moment.Moment | null
  checkOutDate: moment.Moment | null
  setSelectedHubDetails: ({
    location,
    title,
    images,
  }: {
    location?: string
    title?: string
    images?: { dataURL: string }[]
  }) => void
  setBookingDate: (
    checkInDate?: moment.Moment,
    checkOutDate?: moment.Moment
  ) => void
}

export const useStore = create<TStore>((set) => ({
  checkInDate: null,
  checkOutDate: null,
  hubTitle: null,
  hubImages: null,
  hubLocation: null,
  setSelectedHubDetails: ({ location, title, images }) =>
    set(
      produce((draft) => {
        if (location) {
          draft.hubLocation = location
        }
        if (title) {
          draft.hubTitle = title
        }
        if (images) {
          draft.hubImages = images
        }
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
