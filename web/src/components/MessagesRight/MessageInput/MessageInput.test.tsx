import { render } from '@redwoodjs/testing/web'

import MessageInput from './MessageInput'

describe('MessageInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MessageInput />)
    }).not.toThrow()
  })
})
