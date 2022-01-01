import { render } from '@redwoodjs/testing/web'

import AdminControls from './AdminControls'

describe('AdminControls', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminControls />)
    }).not.toThrow()
  })
})
