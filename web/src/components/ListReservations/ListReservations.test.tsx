import { render } from '@redwoodjs/testing/web'

import ListReservations from './ListReservations'

describe('ListReservations', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ListReservations />)
    }).not.toThrow()
  })
})
