import { render } from '@redwoodjs/testing'

import SlidePage from './SlidePage'

describe('SlidePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SlidePage />)
    }).not.toThrow()
  })
})
