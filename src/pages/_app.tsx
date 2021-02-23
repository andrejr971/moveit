import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MoveIt</title>
        <link rel="shortcut icon" href="/assets/img/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/img/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Projeto desenvolvido durante a NLW#4"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
