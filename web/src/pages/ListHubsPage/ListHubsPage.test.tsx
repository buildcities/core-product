import { render } from '@redwoodjs/testing/web'

import ListHubsPage from './ListHubsPage'

describe('ListHubsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ListHubsPage />)
    }).not.toThrow()
  })
})
