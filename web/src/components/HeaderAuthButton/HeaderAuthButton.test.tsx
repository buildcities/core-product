import { render } from '@redwoodjs/testing/web'

import HeaderAuthButton from './HeaderAuthButton'

describe('HeaderAuthButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeaderAuthButton />)
    }).not.toThrow()
  })
})
