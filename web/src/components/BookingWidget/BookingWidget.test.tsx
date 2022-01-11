import { render } from '@redwoodjs/testing/web'

import BookingWidget from './BookingWidget'

describe('BookingWidget', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BookingWidget />)
    }).not.toThrow()
  })
})
