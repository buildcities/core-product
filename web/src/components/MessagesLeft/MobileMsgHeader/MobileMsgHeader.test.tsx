import { render } from '@redwoodjs/testing/web'

import MobileMsgHeader from './MobileMsgHeader'

describe('MobileMsgHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MobileMsgHeader />)
    }).not.toThrow()
  })
})
