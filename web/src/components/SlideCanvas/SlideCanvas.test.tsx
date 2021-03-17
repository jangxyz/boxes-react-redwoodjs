import { render } from '@redwoodjs/testing'

import SlideCanvas from './SlideCanvas'

describe('SlideCanvas', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SlideCanvas />)
    }).not.toThrow()
  })
})
