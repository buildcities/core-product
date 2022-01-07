export const schema = gql`
  type User {
    uuid: String!
    guildId: String!
    userName: String
    createdAt: DateTime!
    updatedAt: DateTime!
    userRoles: [UserRole]!
    reservations: [Reservation]!
    hubs: [Hub]!
    reviews: [Review]!
  }

  type Query {
    users: [User!]! @requireAuth
  }

  input CreateUserInput {
    uuid: String!
    guildId: String!
    updatedAt: DateTime!
  }

  input UpdateUserInput {
    uuid: String
    guildId: String
    updatedAt: DateTime
  }
`
