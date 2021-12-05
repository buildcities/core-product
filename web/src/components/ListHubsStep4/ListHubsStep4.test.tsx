import { render } from '@redwoodjs/testing/web'

import ListHubsStep4 from './ListHubsStep4'

describe('ListHubsStep4', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ListHubsStep4 />)
    }).not.toThrow()
  })
})
