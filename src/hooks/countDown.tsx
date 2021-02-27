import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useChallenge } from './challenge'

interface ICountDownContextData {
  ResetCountDown: () => void
  StartCountDown: () => void
  hasFinished: boolean
  isActive: boolean
  minutes: number
  seconds: number
}

const CountDownContext = createContext<ICountDownContextData>(
  {} as ICountDownContextData,
)

let countdownTimeout: NodeJS.Timeout

const CountDownProvider: React.FC = ({ children }) => {
  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const { startNewChallenge } = useChallenge()

  const minutes = Math.floor(time / 60)

  const seconds = time % 60

  const ResetCountDown = useCallback(() => {
    setIsActive(false)

    clearTimeout(countdownTimeout)
    setTime(0.1 * 60)
    setHasFinished(false)
  }, [])

  const StartCountDown = useCallback(() => {
    setIsActive(true)
  }, [])

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
    <CountDownContext.Provider
      value={{
        ResetCountDown,
        StartCountDown,
        hasFinished,
        minutes,
        seconds,
        isActive,
      }}
    >
      {children}
    </CountDownContext.Provider>
  )
}

function useCountDown(): ICountDownContextData {
  const context = useContext(CountDownContext)

  if (!context) {
    throw new Error('useCountDown must be used within as CountDownProvider')
  }

  return context
}

export { useCountDown, CountDownProvider }
