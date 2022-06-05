import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie, setCookies } from 'cookies-next';
import Head from 'next/head';
import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
  MantineThemeOverride,
  AppShell,
} from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { Header } from '../components/Header/Header';
import { Footer1754 } from '../components/Footer/Footer';

const genTheme = (colorScheme: ColorScheme): MantineThemeOverride => ({
  colorScheme,
  colors: {
    purple: [
      '#f2ebff',
      '#dac4ff',
      '#c19dff',
      '#a876ff',
      '#8f4eff',
      '#7f36ff',
      '#7627ff',
      '#5d00ff',
      '#4e00d8',
      '#4000b1',
    ],
    'light-green': [
      '#edf8f2',
      '#c8ead8',
      '#c8ead8',
      '#c8ead8',
      '#5abf89',
      '#40a56f',
      '#328157',
      '#328157',
      '#153725',
      '#07120c',
    ],
    'background-transparent': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
      (n) => `hsla(0, 0%, 0%, 0.${n})`
    ) as [string, string, string, string, string, string, string, string, string, string],
  },
  primaryColor: 'purple',
  primaryShade: 5,
  fontFamily: 'Avenir Next',
});

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookies('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>1754</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/assets/Logo.jpeg" />
      </Head>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={genTheme(colorScheme)} withGlobalStyles withNormalizeCSS>
          <NotificationsProvider>
            <AppShell header={<Header />} footer={<Footer1754 />} padding={0}>
              <Component {...pageProps} />
            </AppShell>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});
