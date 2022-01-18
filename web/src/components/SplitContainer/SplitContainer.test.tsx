import { render } from '@redwoodjs/testing/web'

import SplitContainer from './SplitContainer'

describe('SplitContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SplitContainer />)
    }).not.toThrow()
  })
})
