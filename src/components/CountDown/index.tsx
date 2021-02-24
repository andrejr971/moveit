import { useChallenge } from 'hooks/challenge'
import { useCallback, useEffect, useState } from 'react'
import { FiCheckCircle, FiPlay, FiStopCircle } from 'react-icons/fi'
import { Container, Button } from './styles'

let countdownTimeout: NodeJS.Timeout

const CountDown = () => {
  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const { startNewChallenge } = useChallenge()

  const minutes = Math.floor(time / 60)

  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  const CountDown = useCallback(() => {
    setIsActive(!isActive)

    if (isActive) {
      clearTimeout(countdownTimeout)
      setTime(0.1 * 60)
    }
  }, [isActive])

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time, startNewChallenge])

  return (
    <>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>

      {hasFinished ? (
        <Button type="button" disabled>
          Ciclo encerrado
          <FiCheckCircle color="#4cd62b" />
        </Button>
      ) : (
        <Button type="button" onClick={CountDown} isActive={isActive}>
          {isActive ? (
            <>
              Abandonar ciclo
              <FiStopCircle />
            </>
          ) : (
            <>
              Iniciar um ciclo
              <FiPlay />
            </>
          )}
        </Button>
      )}
    </>
  )
}

export default CountDown
