import { render } from '@redwoodjs/testing/web'

import ListHubsStepButton from './ListHubsStepButton'

describe('ListHubsStepButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ListHubsStepButton />)
    }).not.toThrow()
  })
})
