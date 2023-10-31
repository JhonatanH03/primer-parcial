import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import '../app/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className='flex flex-col bg-red-200 min-h-screen items-center'>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default MyApp;

