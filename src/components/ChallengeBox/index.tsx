import { useChallenge } from 'hooks/challenge'
import { Button, Container, Content } from './styles'

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge } = useChallenge()

  return (
    <Container>
      <Content hasActiveChallenge={!!activeChallenge}>
        {activeChallenge ? (
          <>
            <header>Ganhe {activeChallenge.amount}xp</header>
            <main>
              <img
                src={`assets/img/icons/${activeChallenge.type}.svg`}
                alt="Desafio"
              />
              <strong>Novo desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>

            <footer>
              <Button className="fail" type="button" onClick={resetChallenge}>
                Falhei
              </Button>
              <Button className="success" type="button">
                Completei
              </Button>
            </footer>
          </>
        ) : (
          <>
            <strong>
              Inicie um ciclo para receber desafios a serem completados
            </strong>
            <p>
              <img src="assets/img/icons/level-up.svg" alt="level up" />
              <span>Complete-os e ganhe experiência e avance de leve.</span>
            </p>
          </>
        )}
      </Content>
    </Container>
  )
}

export default ChallengeBox
