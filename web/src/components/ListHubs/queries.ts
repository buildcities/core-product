export const CREATE_HUB = gql`
  mutation CreateHubMutation($input: CreateHubInput!) {
    createHub(input: $input) {
      id
    }
  }
`
