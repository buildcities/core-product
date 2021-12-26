import { render } from '@redwoodjs/testing/web'

import UserMessage from './UserMessage'

describe('UserMessage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserMessage />)
    }).not.toThrow()
  })
})
