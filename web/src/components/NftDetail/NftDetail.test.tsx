import { render } from '@redwoodjs/testing/web'

import NftDetail from './NftDetail'

describe('NftDetail', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NftDetail />)
    }).not.toThrow()
  })
})
