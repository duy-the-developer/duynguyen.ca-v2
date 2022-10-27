import type { AppProps } from 'next/app'
import { WindowsProvider } from '../contexts/windows-context'

import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WindowsProvider>
      <Component {...pageProps} />
    </WindowsProvider>
  )
}
