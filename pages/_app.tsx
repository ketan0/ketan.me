import '../styles/global.css'
import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Ketan Agrawal</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="description" content="Stanford senior building artificial intelligence that benefits humanity, and exploring new means of human-computer interaction." />
        <meta
          name="keywords"
          content="ketan, agrawal, machine, learning, human, computer, interaction, emacs"
        />
        <meta name="author" content="Ketan Agrawal" />
        <meta name="robots" content="follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default App
