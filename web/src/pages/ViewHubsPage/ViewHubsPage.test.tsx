import { render } from '@redwoodjs/testing/web'

import ViewHubsPage from './ViewHubsPage'

describe('ViewHubsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ViewHubsPage />)
    }).not.toThrow()
  })
})
