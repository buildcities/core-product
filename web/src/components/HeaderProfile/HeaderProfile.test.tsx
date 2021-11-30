import { render } from '@redwoodjs/testing/web'

import HeaderProfile from './HeaderProfile'

describe('HeaderProfile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeaderProfile />)
    }).not.toThrow()
  })
})
