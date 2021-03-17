import { render } from '@redwoodjs/testing'

import SlideNote from './SlideNote'

describe('SlideNote', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SlideNote />)
    }).not.toThrow()
  })
})
