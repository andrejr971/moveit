import { useChallenge } from 'hooks/challenge'
import { Container } from './styles'

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useChallenge()

  const porcentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${porcentToNextLevel}%` }} />

        <span
          className="current-experience"
          style={{ left: `${porcentToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  )
}

export default ExperienceBar
