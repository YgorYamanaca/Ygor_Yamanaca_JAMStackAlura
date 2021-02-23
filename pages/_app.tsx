import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import ThemeManager from '@/theme/ThemeManager';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Portifolio - Ygor Yamanaca</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Fira+Sans+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
    </Head>
    <ThemeManager> 
      <Component {...pageProps} />
    </ThemeManager>
  </>
);

export default App;
