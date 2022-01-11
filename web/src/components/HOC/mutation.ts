export const CREATE_HUB = gql`
  mutation CreateHubMutation($input: CreateHubInput!) {
    createHub(input: $input) {
      id
    }
  }
`

export const UPDATE_HUB = gql`
  mutation UpdateHubMutation($id: Int!, $input: UpdateHubInput!) {
    updateHub(input: $input, id: $id) {
      id
    }
  }
`
