import { useChallenge } from 'hooks/challenge'
import { Container } from './styles'

const CompletedChallenges = () => {
  const { challengesCompleted } = useChallenge()

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  )
}

export default CompletedChallenges
