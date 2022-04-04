import '../styles/globals.scss'
import '../styles/styles.scss'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/auth'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default appWithTranslation(MyApp)
