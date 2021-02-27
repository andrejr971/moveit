import AppProvider from 'hooks'
import { GetServerSideProps } from 'next'
import Home from 'templates/Home'

export interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function Index(props: HomeProps) {
  return (
    <AppProvider {...props}>
      <Home />
    </AppProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengesCompleted } = ctx.req
    .cookies as HomeProps

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  }
}
