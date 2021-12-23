import { render } from '@redwoodjs/testing/web'

import BookReservation from './BookReservation'

describe('BookReservation', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BookReservation images={[]} />)
    }).not.toThrow()
  })
})
