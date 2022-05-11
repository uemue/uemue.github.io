import Link from 'next/link';
import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

const blogTitle = 'uemue';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{blogTitle}</title>
      </Head>
      <header>
        <p>
          <Link href='/'>
            <a>{blogTitle}</a>
          </Link>
        </p>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;