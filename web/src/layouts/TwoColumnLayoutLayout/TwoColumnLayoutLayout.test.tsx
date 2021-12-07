import { render } from '@redwoodjs/testing/web'

import TwoColumnLayoutLayout from './TwoColumnLayoutLayout'

describe('TwoColumnLayoutLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TwoColumnLayoutLayout />)
    }).not.toThrow()
  })
})
