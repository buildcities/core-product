import { render } from '@redwoodjs/testing/web'

import ListHubsStep1 from './ListHubsStep1'

describe('ListHubsStep1', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ListHubsStep1 />)
    }).not.toThrow()
  })
})
