import '../styles/global.css'
import type { AppProps /*, AppContext */ } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap" rel="stylesheet" />
      <Component {...pageProps} />
    </>
  )
}

export default App
