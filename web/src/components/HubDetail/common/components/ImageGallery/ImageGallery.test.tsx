import { render } from '@redwoodjs/testing/web'

import ImageGallery from './ImageGallery'

describe('ImageGallery', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ImageGallery />)
    }).not.toThrow()
  })
})
