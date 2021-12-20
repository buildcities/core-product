import { render } from '@redwoodjs/testing/web'

import HubContactPage from './HubContactPage'

describe('HubContactPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HubContactPage />)
    }).not.toThrow()
  })
})
