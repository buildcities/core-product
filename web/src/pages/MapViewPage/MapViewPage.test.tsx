import { render } from '@redwoodjs/testing/web'

import MapViewPage from './MapViewPage'

describe('MapViewPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MapViewPage />)
    }).not.toThrow()
  })
})
