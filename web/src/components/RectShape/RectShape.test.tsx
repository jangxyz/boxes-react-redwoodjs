import { render } from '@redwoodjs/testing'

import RectShape from './RectShape'

describe('RectShape', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RectShape />)
    }).not.toThrow()
  })
})
