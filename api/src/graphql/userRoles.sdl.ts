export const schema = gql`
  type UserRole {
    id: Int!
    createdAt: DateTime!
    updateddAt: DateTime!
    name: String!
    user: User
    userId: String!
  }

  type Query {
    userRoles: [UserRole!]! @requireAuth
  }

  input CreateUserRoleInput {
    updateddAt: DateTime!
    name: String!
    userId: String!
  }

  input UpdateUserRoleInput {
    updateddAt: DateTime
    name: String
    userId: String
  }
`
