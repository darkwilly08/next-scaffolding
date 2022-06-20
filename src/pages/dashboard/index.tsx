import React, { useContext } from 'react';

import { ThemeContext } from '@local/contexts/theme';
import { getLayout } from '@local/hoc/layout';
import { requiresAuth } from '@local/utils/requiresAuth';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { useAuth } from '@darkwilly08/login';

export default function Dashboard() {
  const { isDark } = useContext(ThemeContext);
  const { logout } = useAuth();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Dashboard the theme is {isDark ? 'dark' : 'light'}</div>
      <button type="button" onClick={() => logout()}>
        LogOut
      </button>
    </div>
  );
}

Dashboard.getLayout = getLayout;

export const getServerSideProps: GetServerSideProps = requiresAuth;
