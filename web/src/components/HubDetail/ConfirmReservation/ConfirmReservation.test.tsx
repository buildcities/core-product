import { render } from '@redwoodjs/testing/web'

import ConfirmReservation from './ConfirmReservation'

describe('ConfirmReservation', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ConfirmReservation />)
    }).not.toThrow()
  })
})
