import { render } from '@redwoodjs/testing/web'

import ReservationDatePicker from './ReservationDatePicker'

describe('ReservationDatePicker', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReservationDatePicker />)
    }).not.toThrow()
  })
})
