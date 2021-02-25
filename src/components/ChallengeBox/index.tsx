import { useChallenge } from 'hooks/challenge'
import { useCountDown } from 'hooks/countDown'
import { useCallback } from 'react'
import { Button, Container, Content } from './styles'

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useChallenge()
  const { ResetCountDown } = useCountDown()

  const handleChallengeSucceeded = useCallback(() => {
    completeChallenge()
    ResetCountDown()
  }, [ResetCountDown, completeChallenge])

  const handleChallengeFailed = useCallback(() => {
    resetChallenge()
    ResetCountDown()
  }, [ResetCountDown, resetChallenge])

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
              <Button
                className="fail"
                type="button"
                onClick={handleChallengeFailed}
              >
                Falhei
              </Button>
              <Button
                className="success"
                type="button"
                onClick={handleChallengeSucceeded}
              >
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
