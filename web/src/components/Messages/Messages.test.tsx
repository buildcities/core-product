import { render } from '@redwoodjs/testing/web'

import Messages from './Messages'

describe('Messages', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Messages />)
    }).not.toThrow()
  })
})
