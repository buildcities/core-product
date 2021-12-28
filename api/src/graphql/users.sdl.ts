export const schema = gql`
  type User {
    uuid: String!
    guildId: String!
    createdAt: DateTime!
    updateddAt: DateTime!
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
    updateddAt: DateTime!
  }

  input UpdateUserInput {
    uuid: String
    guildId: String
    updateddAt: DateTime
  }
`
