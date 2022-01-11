import { render } from '@redwoodjs/testing/web'

import DisconnectWallet from './DisconnectWallet'

describe('DisconnectWallet', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DisconnectWallet />)
    }).not.toThrow()
  })
})
