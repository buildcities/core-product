export const schema = gql`
  type Reservation {
    id: String!
    checkInDate: DateTime!
    checkOutDate: DateTime!
    notes: String
    address: String
    status: ReservationStatus
    createdAt: DateTime!
    updatedAt: DateTime
    hub: Hub!
    hubId: Int!
    owner: User!
    ownerId: String!
  }

  type Query {
    reservations(
      filter: JSON
      isOwner: Boolean
      skip: Int
      take: Int
    ): [Reservation!]! @requireAuth
    reservation(id: String!): Reservation @requireAuth
  }

  input CreateReservationInput {
    checkInDate: DateTime!
    checkOutDate: DateTime!
    notes: String
    address: String
    status: ReservationStatus
    updatedAt: DateTime
    hubId: Int!
    ownerId: String!
  }

  input UpdateReservationInput {
    checkInDate: DateTime
    checkOutDate: DateTime
    notes: String
    address: String
    status: ReservationStatus
    updatedAt: DateTime
    hubId: Int
    ownerId: String
  }

  type Mutation {
    createReservation(input: CreateReservationInput!): Reservation! @requireAuth
    updateReservation(
      id: String!
      input: UpdateReservationInput!
    ): Reservation! @requireAuth
    deleteReservation(id: String!): Reservation! @requireAuth
  }

  enum ReservationStatus {
    NEW
    APPROVED
    REJECTED
  }
`
