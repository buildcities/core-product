import { render } from '@redwoodjs/testing/web'

import ConnectWallet from './ConnectWallet'

describe('ConnectWallet', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ConnectWallet />)
    }).not.toThrow()
  })
})
