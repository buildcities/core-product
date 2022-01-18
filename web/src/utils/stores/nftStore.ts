import produce from 'immer'
import create from 'zustand'

export type NFTMetaData = {
  name?: string
  description?: string
  external_url?: string
  image?: string
  attributes?: []
}

interface TStore {
  token?: string
  setToken: (token: string) => void
  metaData?: NFTMetaData
  setMetadata: (data: NFTMetaData) => void
  clearNFTStore?: () => void
}

export const useStore = create<TStore>((set) => ({
  token: null,
  metaData: {},
  clearNFTStore: () =>
    set(
      produce((draft) => {
        draft.metaData = {}
        draft.token = null
      })
    ),
  setMetadata: (data) =>
    set(
      produce((draft) => {
        draft.metaData = data
      })
    ),
  setToken: (token) =>
    set(
      produce((draft) => {
        draft.token = token
      })
    ),
}))
