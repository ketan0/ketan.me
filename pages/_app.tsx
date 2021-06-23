import '../styles/global.css'
import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import Nav from '../components/Nav'
import Link from 'next/link'


function App({ Component, pageProps }: AppProps) {
  return (
    <div className="divide-y divide-gray-200">
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
      <Nav />
      <Component {...pageProps} />
      <footer className="flex flex-col items-center text-center py-4 space-y-2">
        <p>© 2021 Ketan Agrawal.</p>
        <p className="text-sm">
          This site was built with&nbsp;
            <Link href="https://nextjs.org/"><a className="normal-link">Next.js</a></Link> and hosted on&nbsp;
            <Link href="https://netlify.com/"><a className="normal-link">Netlify</a></Link>.
            Source code is available <Link href="https://github.com/ketan0/ketan.me"><a className="normal-link">here</a></Link>.
        </p>
      </footer>
    </div>
  )
}

export default App
