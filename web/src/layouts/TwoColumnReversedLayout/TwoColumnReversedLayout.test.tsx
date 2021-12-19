import { render } from '@redwoodjs/testing/web'

import TwoColumnReversedLayout from './TwoColumnReversedLayout'

describe('TwoColumnReversedLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TwoColumnReversedLayout />)
    }).not.toThrow()
  })
})
