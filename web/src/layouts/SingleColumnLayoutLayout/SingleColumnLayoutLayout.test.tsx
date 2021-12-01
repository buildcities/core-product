import { render } from '@redwoodjs/testing/web'

import SingleColumnLayoutLayout from './SingleColumnLayoutLayout'

describe('SingleColumnLayoutLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SingleColumnLayoutLayout />)
    }).not.toThrow()
  })
})
