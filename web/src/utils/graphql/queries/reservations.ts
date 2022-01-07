export const FIND_RESERVATION_QUERY = gql`
  query FindReservationQuery($id: String!) {
    reservation: reservation(id: $id) {
      id
      hub {
        name
        images
        location
        amenities
        ownerId
        reviews {
          comments
        }
      }
      checkInDate
      checkOutDate
      ownerId
    }
  }
`
