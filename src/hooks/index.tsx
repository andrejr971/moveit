import { ChallengeProvider } from './challenge'

const AppProvider: React.FC = ({ children }) => {
  return <ChallengeProvider>{children}</ChallengeProvider>
}

export default AppProvider
