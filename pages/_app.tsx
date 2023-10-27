import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import '../app/globals.css'

function MyApp({ Component: App, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className='flex flex-col bg-red-200 min-h-screen aling-center'>
        <App {...pageProps} />
      </div>
    </SessionProvider>
  )
}
