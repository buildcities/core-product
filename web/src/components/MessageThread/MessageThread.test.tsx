import { render } from '@redwoodjs/testing/web'

import MessageThread from './MessageThread'

describe('MessageThread', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MessageThread />)
    }).not.toThrow()
  })
})
