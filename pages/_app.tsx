import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Portifolio</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;