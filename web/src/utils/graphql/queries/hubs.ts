export const HUBS_QUERY = gql`
  query HubsQuery($filter: String, $skip: Int, $take: Int) {
    hubs(filter: $filter, skip: $skip, take: $take) {
      id
      location
      name
      images
      createdAt
      ownerId
    }
  }
`
export const FIND_HUB_QUERY = gql`
  query FindHubQuery($id: Int!) {
    hub: hub(id: $id) {
      id
      amenities
      location
      images
      name
      availability
      rules
      ownerId
      owner {
        userName
      }
      type
      reviews {
        comments
      }
    }
  }
`
