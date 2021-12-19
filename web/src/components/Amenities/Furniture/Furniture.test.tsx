import { render } from '@redwoodjs/testing/web'

import Furniture from './Furniture'

describe('Furniture', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Furniture />)
    }).not.toThrow()
  })
})
