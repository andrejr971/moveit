import { useCountDown } from 'hooks/countDown'
import { FiCheckCircle, FiPlay, FiStopCircle } from 'react-icons/fi'
import { Container, Button } from './styles'

const CountDown = () => {
  const {
    hasFinished,
    StartCountDown,
    ResetCountDown,
    minutes,
    seconds,
    isActive,
  } = useCountDown()

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

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
        <>
          {isActive ? (
            <Button type="button" onClick={ResetCountDown} isActive={isActive}>
              Abandonar ciclo
              <FiStopCircle />
            </Button>
          ) : (
            <Button type="button" onClick={StartCountDown} isActive={isActive}>
              Iniciar um ciclo
              <FiPlay />
            </Button>
          )}
        </>
      )}
    </>
  )
}

export default CountDown
