import { Hub } from 'types/graphql'

export const prepareHubForView = (hub: Hub) => ({
  title: hub.name,
  subTitle: hub.location?.country,
  src: hub?.images?.[0]['dataURL'],
})
