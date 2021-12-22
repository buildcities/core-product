import { render } from '@redwoodjs/testing/web'

import BookReservationPage from './BookReservationPage'

describe('BookReservationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BookReservationPage />)
    }).not.toThrow()
  })
})
