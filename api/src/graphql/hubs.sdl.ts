export const schema = gql`
  type Hub {
    id: Int!
    name: String
    location: JSON
    type: JSON
    amenities: JSON
    images: JSON
    availability: JSON
    rules: JSON
    description: String
    status: Status
    createdAt: DateTime!
    reservations: [Reservation]!
    owner: User!
    ownerId: String!
    reviews: [Review]!
  }

  enum Status {
    PENDING
    ACTIVE
    DISABLED
  }

  type Query {
    hubs(filter: String, skip: Int, take: Int): [Hub!]! @requireAuth
    hub(id: Int!): Hub @requireAuth
  }

  input CreateHubInput {
    name: String
    location: JSON
    type: JSON
    amenities: JSON
    images: JSON
    availability: JSON
    rules: JSON
    description: String
    status: Status
    ownerId: String!
  }

  input UpdateHubInput {
    name: String
    location: JSON
    type: JSON
    amenities: JSON
    images: JSON
    availability: JSON
    rules: JSON
    description: String
    status: Status
    ownerId: String
  }

  type Mutation {
    createHub(input: CreateHubInput!): Hub! @requireAuth
    updateHub(id: Int!, input: UpdateHubInput!): Hub! @requireAuth
    deleteHub(id: Int!): Hub! @requireAuth
  }
`
