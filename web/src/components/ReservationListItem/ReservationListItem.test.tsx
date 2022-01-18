import { render } from '@redwoodjs/testing/web'

import ReservationListItem from './ReservationListItem'

describe('ReservationListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReservationListItem />)
    }).not.toThrow()
  })
})
