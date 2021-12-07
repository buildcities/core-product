export const schema = gql`
  type Hub {
    id: Int!
    name: String
    location: JSON
    type: JSON
    amenities: JSON
    images: JSON
    availability: String
    rules: JSON
    description: String
    status: Status
    createdAt: DateTime!
  }

  enum Status {
    PENDING
    ACTIVE
    DISABLED
  }

  type Query {
    hubs: [Hub!]! @requireAuth
    hub(id: Int!): Hub @requireAuth
  }

  input CreateHubInput {
    name: String
    location: JSON
    type: JSON
    amenities: JSON
    images: JSON
    availability: String
    rules: JSON
    description: String
    status: Status
  }

  input UpdateHubInput {
    name: String
    location: JSON
    type: JSON
    amenities: JSON
    images: JSON
    availability: String
    rules: JSON
    description: String
    status: Status
  }

  type Mutation {
    createHub(input: CreateHubInput!): Hub! @requireAuth
    updateHub(id: Int!, input: UpdateHubInput!): Hub! @requireAuth
    deleteHub(id: Int!): Hub! @requireAuth
  }
`
