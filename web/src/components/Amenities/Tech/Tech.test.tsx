import { render } from '@redwoodjs/testing/web'

import Tech from './Tech'

describe('Tech', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Tech />)
    }).not.toThrow()
  })
})
