import Head from 'next/head';
import * as React from 'react';
import Pools from './Pools';
import ProtocolStats from './ProtocolStats';

export default function LendScreen() {
  return (
    <>
      <Head>
        <title>Lend - 1754</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/assets/Logo.jpeg" />
      </Head>

      <ProtocolStats />
      <Pools type="Senior" />
      <Pools type="Junior" />
    </>
  );
}
