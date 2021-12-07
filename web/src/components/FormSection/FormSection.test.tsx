import { render } from '@redwoodjs/testing/web'

import FormSection from './FormSection'

describe('FormSectionHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FormSection title="Test Section Title" />)
    }).not.toThrow()
  })
})
