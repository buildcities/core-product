import { render } from '@redwoodjs/testing/web'

import ThreadMessages from './ThreadMessages'

describe('ThreadMessages', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThreadMessages />)
    }).not.toThrow()
  })
})
