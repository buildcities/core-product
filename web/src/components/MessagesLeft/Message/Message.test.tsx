import { render } from '@redwoodjs/testing/web'

import Message from './Message'

describe('Message', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Message />)
    }).not.toThrow()
  })
})
