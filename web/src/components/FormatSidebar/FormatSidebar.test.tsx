import { render } from '@redwoodjs/testing'

import FormatSidebar from './FormatSidebar'

describe('FormatSidebar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FormatSidebar />)
    }).not.toThrow()
  })
})
