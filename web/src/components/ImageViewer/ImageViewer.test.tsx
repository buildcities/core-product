import { render } from '@redwoodjs/testing/web'

import ImageViewer from './ImageViewer'

describe('ImageViewer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ImageViewer />)
    }).not.toThrow()
  })
})
