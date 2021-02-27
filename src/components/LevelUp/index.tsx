import { useChallenge } from 'hooks/challenge'
import { FiX } from 'react-icons/fi'
import { Container, Overlay } from './styles'

interface LevelUpProps {
  isLevelUpModal: boolean
  setCloseLevelUpModal: () => void
}

const LevelUp: React.FC<LevelUpProps> = ({
  isLevelUpModal,
  setCloseLevelUpModal,
}) => {
  const { level } = useChallenge()

  return (
    <Overlay isLevelUpModal={isLevelUpModal}>
      <Container>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>

        <button type="button" onClick={setCloseLevelUpModal}>
          <FiX />
        </button>
      </Container>
    </Overlay>
  )
}

export default LevelUp
