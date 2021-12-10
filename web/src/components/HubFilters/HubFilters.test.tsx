import { render } from '@redwoodjs/testing/web'

import HubFilters from './HubFilters'

describe('HubFilters', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HubFilters />)
    }).not.toThrow()
  })
})
