import { render } from '@redwoodjs/testing/web'

import AdminModeButton from './AdminModeButton'

describe('AdminModeButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminModeButton />)
    }).not.toThrow()
  })
})
