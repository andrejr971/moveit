import { useChallenge } from 'hooks/challenge'
import { Container } from './styles'

const Profile = () => {
  const { level } = useChallenge()

  return (
    <Container>
      <img src="https://github.com/andrejr971.png" alt="Perfil" />

      <div>
        <strong>André Junior</strong>
        <p>
          <img src="assets/img/icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </Container>
  )
}

export default Profile
