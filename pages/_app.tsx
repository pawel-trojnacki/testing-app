import '../styles/globals.css';
import type { AppProps /*, AppContext */ } from 'next/app';
import { ReactElement } from 'react';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
