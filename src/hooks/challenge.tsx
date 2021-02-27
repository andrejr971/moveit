import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import Cookies from 'js-cookie'
import LevelUp from 'components/LevelUp'

import challenges from '../../challenges.json'

interface IChallenge {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface IChallengeContextData {
  levelUp: () => void
  startNewChallenge: () => void
  level: number
  currentExperience: number
  challengesCompleted: number
  experienceToNextLevel: number
  activeChallenge: IChallenge | null
  resetChallenge: () => void
  completeChallenge: () => void
}

interface ChallengeProps {
  children: ReactNode
  level: number
  currentExperience: number
  challengesCompleted: number
}

const ChallengeContext = createContext<IChallengeContextData>(
  {} as IChallengeContextData,
)

const ChallengeProvider: React.FC<ChallengeProps> = ({ children, ...rest }) => {
  const [level, setLevel] = useState(rest.level ?? 1)
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0,
  )
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0,
  )
  const [activeChallenge, setActiveChallenge] = useState<IChallenge | null>(
    null,
  )
  const [isLevelUpModal, setIsLevelUpModal] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExperience', String(currentExperience))
    Cookies.set('challengesCompleted', String(challengesCompleted))
  }, [level, currentExperience, challengesCompleted])

  const levelUp = useCallback(() => {
    setLevel(level + 1)
    setIsLevelUpModal(true)
  }, [level])

  const startNewChallenge = useCallback(() => {
    const randomChanllengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChanllengeIndex]

    if (Notification.permission === 'granted') {
      new Notification('Novo Desafio \u{1F389}', {
        body: `Valendo ${challenge.amount}xp`,
        icon: '/assets/img/favicon.png',
      })

      new Audio('/assets/song/notification.mp3').play()
    }

    setActiveChallenge(challenge as IChallenge)
  }, [])

  const resetChallenge = useCallback(() => {
    setActiveChallenge(null)
  }, [])

  const setCloseLevelUpModal = useCallback(() => {
    setIsLevelUpModal(false)
  }, [])

  const completeChallenge = useCallback(() => {
    if (!activeChallenge) return

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
    }

    setActiveChallenge(null)
    setCurrentExperience(finalExperience)
    setChallengesCompleted(challengesCompleted + 1)
  }, [
    activeChallenge,
    currentExperience,
    experienceToNextLevel,
    levelUp,
    challengesCompleted,
  ])

  return (
    <ChallengeContext.Provider
      value={{
        levelUp,
        level,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
      }}
    >
      {children}

      <LevelUp
        isLevelUpModal={isLevelUpModal}
        setCloseLevelUpModal={setCloseLevelUpModal}
      />
    </ChallengeContext.Provider>
  )
}

function useChallenge(): IChallengeContextData {
  const context = useContext<IChallengeContextData>(ChallengeContext)

  if (!context) {
    throw new Error('useChallenge must be used within as ChallengeProvider')
  }

  return context
}

export { ChallengeProvider, useChallenge }
