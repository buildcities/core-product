import { render } from '@redwoodjs/testing/web'

import HubDetailPage from './HubDetailPage'

describe('HubDetailPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HubDetailPage />)
    }).not.toThrow()
  })
})
