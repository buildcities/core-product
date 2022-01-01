export const REMOVE_HUB = gql`
  mutation deleteHub($id: Int!) {
    deleteHub(id: $id) {
      id
    }
  }
`
