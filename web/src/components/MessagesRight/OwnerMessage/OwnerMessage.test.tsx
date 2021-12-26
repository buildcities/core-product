import { render } from '@redwoodjs/testing/web'

import OwnerMessage from './OwnerMessage'

describe('OwnerMessage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OwnerMessage />)
    }).not.toThrow()
  })
})
