import { render } from '@redwoodjs/testing/web'

import ViewReservationsPage from './ViewReservationsPage'

describe('ViewReservationsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ViewReservationsPage />)
    }).not.toThrow()
  })
})
