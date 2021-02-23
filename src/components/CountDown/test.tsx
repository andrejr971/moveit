import { render, screen } from '@testing-library/react'

import CountDown from '.'

describe('<CountDown />', () => {
  it('should render the heading', () => {
    const { container } = render(<CountDown />)

    expect(screen.getByRole('heading', { name: /CountDown/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
