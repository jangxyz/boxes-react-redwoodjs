import { render } from '@redwoodjs/testing'

import SlideThumbnails from './SlideThumbnails'

describe('SlideThumbnails', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SlideThumbnails />)
    }).not.toThrow()
  })
})
