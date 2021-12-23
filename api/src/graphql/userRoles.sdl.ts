export const schema = gql`
  type UserRole {
    id: Int!
    createdAt: DateTime!
    updateddAt: DateTime!
    name: String!
    user: User
    userId: Int!
  }

  type Query {
    userRoles: [UserRole!]! @requireAuth
  }

  input CreateUserRoleInput {
    updateddAt: DateTime!
    name: String!
    userId: Int!
  }

  input UpdateUserRoleInput {
    updateddAt: DateTime
    name: String
    userId: Int
  }
`
