import { render } from '@redwoodjs/testing/web'

import CheckinDates from './CheckinDates'

describe('CheckinDates', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CheckinDates />)
    }).not.toThrow()
  })
})
