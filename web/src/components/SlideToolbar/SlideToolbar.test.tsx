import { render } from '@redwoodjs/testing'

import SlideToolbar from './SlideToolbar'

describe('SlideToolbar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SlideToolbar />)
    }).not.toThrow()
  })
})
