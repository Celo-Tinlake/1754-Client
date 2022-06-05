import * as React from 'react';
import Pools from './Pools';
import ProtocolStats from './ProtocolStats';

export default function LendScreen() {
  return (
    <>
      <ProtocolStats />
      <Pools type="Senior" />
      <Pools type="Junior" />
    </>
  );
}
