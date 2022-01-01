import produce from 'immer'
import create from 'zustand'

interface TStore {
  userName?: string
  userId?: string
  email?: string
  picture?: string
  clearUser?: () => void
  setUser?: ({
    picture,
    full_name,
    provider_id,
    email,
  }: {
    picture?: string
    full_name?: string
    provider_id?: string
    email?: string
  }) => void
}

export const useStore = create<TStore>((set) => ({
  userName: null,
  userId: null,
  email: null,
  picture: null,

  setUser: ({ picture, full_name, provider_id, email }) =>
    set(
      produce((draft) => {
        draft.userName = full_name
        draft.userId = provider_id
        draft.email = email
        draft.picture = picture
      })
    ),
  clearUser: () =>
    set(
      produce((draft) => {
        draft.userId = null
        draft.email = null
        draft.userName = null
        draft.picture = null
      })
    ),
}))
