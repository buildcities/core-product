import { render } from '@redwoodjs/testing/web'

import EditHub from './EditHub'

describe('EditHub', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditHub />)
    }).not.toThrow()
  })
})
