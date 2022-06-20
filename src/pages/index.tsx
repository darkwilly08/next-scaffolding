import React, { useContext } from 'react';

import { ThemeContext } from '@local/contexts/theme';
import Head from 'next/head';

import { DwButton } from '@darkwilly08/dw-button';

export default function Home() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DwButton onClick={toggleTheme} text="hello" />
    </div>
  );
}
