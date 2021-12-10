import { render } from '@redwoodjs/testing/web'

import MapView from './MapView'

describe('MapView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MapView />)
    }).not.toThrow()
  })
})
