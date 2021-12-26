import { render } from '@redwoodjs/testing/web'

import MessagesRight from './MessagesRight'

describe('MessagesRight', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MessagesRight />)
    }).not.toThrow()
  })
})
