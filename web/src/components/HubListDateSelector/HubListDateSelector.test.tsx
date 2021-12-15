import { render } from '@redwoodjs/testing/web'

import HubListDateSelector from './HubListDateSelector'

describe('HubListDateSelector', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HubListDateSelector />)
    }).not.toThrow()
  })
})
