import { render } from '@redwoodjs/testing/web'

import DrinksAndSnacks from './DrinksAndSnacks'

describe('DrinksAndSnacks', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DrinksAndSnacks />)
    }).not.toThrow()
  })
})
