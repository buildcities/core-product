export const UPDATE_RESERVATION = gql`
  mutation UpdateReservation($id: String!, $input: UpdateReservationInput!) {
    updateReservation(id: $id, input: $input) {
      id
    }
  }
`
