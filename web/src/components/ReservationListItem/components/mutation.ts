export const UPDATE_RESERVATION = gql`
  mutation UpdateReservationMutation(
    $id: String!
    $input: UpdateReservationInput!
  ) {
    updateReservation(id: $id, input: $input) {
      id
    }
  }
`
