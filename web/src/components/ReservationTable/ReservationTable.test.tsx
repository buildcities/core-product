import { render } from '@redwoodjs/testing/web'

import ReservationTable from './ReservationTable'

describe('ReservationTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReservationTable data={[]} type="approved" />)
    }).not.toThrow()
  })
})
