import { render } from '@redwoodjs/testing/web'

import HubDetailHeader from './HubDetailHeader'

describe('HubDetailHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HubDetailHeader title="Test Title" subTitle="Test Subtitle" />)
    }).not.toThrow()
  })
})
