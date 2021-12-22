import { render } from '@redwoodjs/testing/web'

import HubDetailContainer from './HubDetailContainer'

describe('HubDetailContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HubDetailContainer />)
    }).not.toThrow()
  })
})
