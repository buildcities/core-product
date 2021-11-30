import { render } from '@redwoodjs/testing/web'

import FormField from './FormField'

describe('FormField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FormField />)
    }).not.toThrow()
  })
})
