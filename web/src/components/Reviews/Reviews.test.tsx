import { render } from '@redwoodjs/testing/web'

import Reviews from './Reviews'

describe('Reviews', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Reviews />)
    }).not.toThrow()
  })
})
