import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'

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
}

interface ChallengeProps {
  children: ReactNode
}

const ChallengeContext = createContext<IChallengeContextData>(
  {} as IChallengeContextData,
)

const ChallengeProvider: React.FC<ChallengeProps> = ({ children }) => {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState<IChallenge | null>(
    null,
  )

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  const levelUp = useCallback(() => {
    setLevel(level + 1)
  }, [level])

  const startNewChallenge = useCallback(() => {
    const randomChanllengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChanllengeIndex]

    setActiveChallenge(challenge as IChallenge)
  }, [])

  const resetChallenge = useCallback(() => {
    setActiveChallenge(null)
  }, [])

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
      }}
    >
      {children}
    </ChallengeContext.Provider>
  )
}

function useChallenge() {
  const context = useContext<IChallengeContextData>(ChallengeContext)

  if (!context) {
    throw new Error('useChallenge must be used within as ChallengeProvider')
  }

  return context
}

export { ChallengeProvider, useChallenge }
