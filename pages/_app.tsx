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
        <Link href='/'>
          <a>
            <h1>{blogTitle}</h1>
          </a>
        </Link>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </footer>
    </>
  );
}

export default MyApp;
