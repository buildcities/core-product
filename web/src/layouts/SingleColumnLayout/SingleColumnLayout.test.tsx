import { render } from '@redwoodjs/testing/web'

import SingleColumnLayout from './SingleColumnLayout'

describe('SingleColumnLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SingleColumnLayout />)
    }).not.toThrow()
  })
})
