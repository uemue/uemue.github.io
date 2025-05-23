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
      <div className='container'>
        <header>
          <div className='blog-title'>
            <Link href='/'>
              {blogTitle}
            </Link>
          </div>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
        <footer>
          <Link href='/'>
            Home
          </Link>
        </footer>
      </div>
    </>
  );
}

export default MyApp;
