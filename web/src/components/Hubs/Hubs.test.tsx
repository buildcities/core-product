import { render } from '@redwoodjs/testing/web'

import Hubs from './Hubs'

describe('Hubs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Hubs />)
    }).not.toThrow()
  })
})
