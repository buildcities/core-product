import { render } from '@redwoodjs/testing/web'

import SelectButtons from './SelectButtons'

describe('SelectButtons', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SelectButtons name="selectButtons" selectProps={[]} />)
    }).not.toThrow()
  })
})
