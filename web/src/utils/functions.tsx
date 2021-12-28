import { Hub } from 'types/graphql'

export const prepareHubForView = (hub: Hub) => ({
  id: hub.id,
  title: hub.name,
  subTitle: hub.location?.country,
  src: hub?.images?.[0]['dataURL'],
})

export const getUserId = (userMetaData: { user_metadata: { provider_id } }) => {
  return userMetaData?.user_metadata?.provider_id?.toString()
}
