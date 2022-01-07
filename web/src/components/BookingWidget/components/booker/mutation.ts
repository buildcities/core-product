export const CREATE_RESERVATION = gql`
  mutation CreateReservationMutation($input: CreateReservationInput!) {
    createReservation(input: $input) {
      id
      checkInDate
      checkOutDate
      ownerId
      hub {
        name
        location
        images
      }
    }
  }
`

export const UPDATE_RESERVATION = gql`
  mutation UpdateReservationMutation(
    $input: UpdateReservationInput!
    $id: String!
  ) {
    updateReservation(id: $id, input: $input) {
      id
    }
  }
`
