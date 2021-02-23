import { render, screen } from '@testing-library/react'

import ExperienceBar from '.'

describe('<ExperienceBar />', () => {
  it('should render the span', () => {
    const { container } = render(<ExperienceBar />)

    expect(screen.findAllByText('0 xp'))

    expect(container.firstChild).toMatchSnapshot()
  })
})
