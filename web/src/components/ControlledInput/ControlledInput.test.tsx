import { render } from '@redwoodjs/testing/web'

import ControlledInput from './ControlledInput'

describe('ControlledInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ControlledInput />)
    }).not.toThrow()
  })
})
