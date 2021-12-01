import { render } from '@redwoodjs/testing/web'

import LoginPage from './LoginPage'

describe('LoginPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoginPage />)
    }).not.toThrow()
  })
})
