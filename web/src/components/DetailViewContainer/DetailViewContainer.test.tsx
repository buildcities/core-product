import { render } from '@redwoodjs/testing/web'

import DetailViewContainer from './DetailViewContainer'

describe('DetailViewContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DetailViewContainer />)
    }).not.toThrow()
  })
})
