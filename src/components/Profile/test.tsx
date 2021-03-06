import { render, screen } from '@testing-library/react'

import Profile from '.'

describe('<Profile />', () => {
  it('should render the heading', () => {
    const { container } = render(<Profile />)

    expect(screen.findByText('level'))
    expect(container.firstChild).toMatchSnapshot()
  })
})
