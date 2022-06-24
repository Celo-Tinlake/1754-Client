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
import { Alfajores, ContractKitProvider } from '@celo-tools/use-contractkit';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Footer1754 } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';

// import { PricesProvider } from './contexts/prices';
// import { SettingsProvider } from './contexts/settings';

import { Web3ContextProvider } from '../hooks/web3/web3-context';

const queryClient = new QueryClient();

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
      <ContractKitProvider
        networks={[Alfajores]}
        network={Alfajores}
        dapp={{
          name: '1754 Factory',
          description:
            'The interface for 1754 Factory, last mile lending for fintechs and consumers in the Global South.',
          url: 'https://app.ubeswap.org',
          icon: 'https://info.ubeswap.org/favicon.png',
        }}
        connectModal={{
          reactModalProps: {
            style: {
              content: {
                top: '50%',
                left: '50%',
                // right: 'auto',
                // bottom: 'auto',
                transform: 'translate(-50%, -50%)',
                border: colorScheme === 'dark' ? 'black' : 'white',
                background: colorScheme === 'dark' ? 'black' : 'white',
                // padding: 'unset',
                color: 'black',
              },
              overlay: {
                zIndex: 999,
              },
            },
            overlayClassName:
              'tw-fixed tw-bg-gray-100 dark:tw-bg-gray-700 tw-bg-opacity-75 tw-inset-0',
          },
        }}
      >
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider theme={genTheme(colorScheme)} withGlobalStyles withNormalizeCSS>
            <QueryClientProvider client={queryClient}>
              <ReactQueryDevtools initialIsOpen={false} />
              <Web3ContextProvider>
                <NotificationsProvider>
                  <AppShell header={<Header />} footer={<Footer1754 />} padding={0}>
                    <Component {...pageProps} />
                  </AppShell>
                </NotificationsProvider>
              </Web3ContextProvider>
            </QueryClientProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </ContractKitProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});
