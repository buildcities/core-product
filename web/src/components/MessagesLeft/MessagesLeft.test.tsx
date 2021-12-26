import { render } from '@redwoodjs/testing/web'

import MessagesLeft from './MessagesLeft'

describe('MessagesLeft', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MessagesLeft />)
    }).not.toThrow()
  })
})
