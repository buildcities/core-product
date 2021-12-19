import { render } from '@redwoodjs/testing/web'

import ConfirmReservationPage from './ConfirmReservationPage'

describe('ConfirmReservationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ConfirmReservationPage />)
    }).not.toThrow()
  })
})
