import { render } from '@redwoodjs/testing/web'

import ChangeBookingPage from './ChangeBookingPage'

describe('ChangeBookingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChangeBookingPage id="test-id" />)
    }).not.toThrow()
  })
})
