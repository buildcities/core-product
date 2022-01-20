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
export const RESERVATIONS_QUERY = gql`
  query ReservationsQuery(
    $filter: JSON
    $isOwner: Boolean
    $skip: Int
    $take: Int
  ) {
    reservations(filter: $filter, isOwner: $isOwner, skip: $skip, take: $take) {
      id
      status
      address
      checkInDate
      checkOutDate
      ownerId
      owner {
        avatar
        userName
      }
      hub {
        owner {
          userName
          avatar
        }
        location
      }
    }
  }
`
