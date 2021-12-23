export const HUBS_QUERY = gql`
  query HubsQuery($filter: String, $skip: Int, $take: Int) {
    hubs(filter: $filter, skip: $skip, take: $take) {
      id
      location
      name
      images
      createdAt
    }
  }
`
