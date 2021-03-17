import { render } from '@redwoodjs/testing'

import Slide from './SlideScreen'

describe('Slide', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Slide />)
    }).not.toThrow()
  })
})
