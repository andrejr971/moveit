import { ChallengeProvider } from './challenge'
import { CountDownProvider } from './countDown'

const AppProvider: React.FC = ({ children }) => {
  return (
    <ChallengeProvider>
      <CountDownProvider>{children}</CountDownProvider>
    </ChallengeProvider>
  )
}

export default AppProvider
