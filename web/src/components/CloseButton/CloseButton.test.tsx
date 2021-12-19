import { render } from '@redwoodjs/testing/web'

import CloseButton from './CloseButton'

describe('CloseButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CloseButton />)
    }).not.toThrow()
  })
})
