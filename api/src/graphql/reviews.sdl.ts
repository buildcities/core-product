export const schema = gql`
  type Review {
    id: Int!
    rating: Int!
    comments: String!
    owner: User!
    hub: Hub!
    ownerId: String!
    hubId: Int!
  }

  type Query {
    reviews: [Review!]! @requireAuth
    review(id: Int!): Review @requireAuth
  }

  input CreateReviewInput {
    rating: Int!
    comments: String!
    ownerId: String!
    hubId: Int!
  }

  input UpdateReviewInput {
    rating: Int
    comments: String
    ownerId: String
    hubId: Int
  }

  type Mutation {
    createReview(input: CreateReviewInput!): Review! @requireAuth
    updateReview(id: Int!, input: UpdateReviewInput!): Review! @requireAuth
    deleteReview(id: Int!): Review! @requireAuth
  }
`
