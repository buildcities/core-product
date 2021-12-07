import { render } from '@redwoodjs/testing/web'

import LayoutHeader from './LayoutHeader'

describe('LayoutHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LayoutHeader />)
    }).not.toThrow()
  })
})
