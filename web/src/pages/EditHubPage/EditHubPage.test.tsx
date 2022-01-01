import { render } from '@redwoodjs/testing/web'

import EditHubPage from './EditHubPage'

describe('EditHubPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditHubPage id={1} />)
    }).not.toThrow()
  })
})
