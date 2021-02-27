import { ReactNode } from 'react'
import { ChallengeProvider } from './challenge'
import { CountDownProvider } from './countDown'

interface AppProviderProps {
  children: ReactNode
  level: number
  currentExperience: number
  challengesCompleted: number
}

const AppProvider: React.FC<AppProviderProps> = ({ children, ...rest }) => {
  return (
    <ChallengeProvider {...rest}>
      <CountDownProvider>{children}</CountDownProvider>
    </ChallengeProvider>
  )
}

export default AppProvider
