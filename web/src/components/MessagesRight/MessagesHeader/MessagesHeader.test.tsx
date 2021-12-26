import { render } from '@redwoodjs/testing/web'

import MessagesHeader from './MessagesHeader'

describe('MessagesHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MessagesHeader />)
    }).not.toThrow()
  })
})
