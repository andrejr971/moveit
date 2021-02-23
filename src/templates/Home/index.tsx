import CompletedChallenges from 'components/CompletedChallenges'
import CountDown from 'components/CountDown'
import ExperienceBar from 'components/ExperienceBar'
import Profile from 'components/Profile'

import { Challenge, Container, Section, Time } from './styles'

export default function Home() {
  return (
    <Container>
      <ExperienceBar />

      <Section>
        <Time>
          <Profile />
          <CompletedChallenges />
          <CountDown />
        </Time>

        <Challenge></Challenge>
      </Section>
    </Container>
  )
}
