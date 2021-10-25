import { render } from '@redwoodjs/testing/web'

import MyPagePage from './MyPagePage'

describe('MyPagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyPagePage />)
    }).not.toThrow()
  })
})
