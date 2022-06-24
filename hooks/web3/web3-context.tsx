import type { Connector } from '@celo-tools/use-contractkit';
import { useContractKit } from '@celo-tools/use-contractkit';
import type { ChainId } from '@dahlia-labs/celo-contrib';
import type { JsonRpcProvider } from '@ethersproject/providers';
import { StaticJsonRpcProvider } from '@ethersproject/providers';
import type { ReactElement } from 'react';
import React, { useCallback, useContext, useMemo, useState } from 'react';

type onChainProvider = {
  connect: () => Promise<Connector>;
  disconnect: () => void;
  jsonProvider: JsonRpcProvider;
  address: string | null;
  connected: boolean;
  chainID: ChainId;
  blocknumber: number | null;
};

export type Web3ContextData = {
  onChainProvider: onChainProvider;
} | null;

const Web3Context = React.createContext<Web3ContextData>(null);

export const useWeb3Context = () => {
  const web3Context = useContext(Web3Context);
  if (!web3Context) {
    throw new Error(
      'useWeb3Context() can only be used inside of <Web3ContextProvider />, ' +
        'please declare it at a higher level.'
    );
  }
  const { onChainProvider } = web3Context;
  return useMemo(() => ({ ...onChainProvider }), [onChainProvider]);
};

export const Web3ContextProvider: React.FC<{ children: ReactElement }> = ({ children }) => {
  const [state, setState] = useState<number | null>(null);

  const uck = useContractKit();

  const jsonProvider = useMemo(
    () => new StaticJsonRpcProvider(uck.network.rpcUrl),
    [uck.network.rpcUrl]
  );

  const blockNumberCallback = useCallback(
    (blockNumber: number) => {
      setState((state) => {
        if (typeof state !== 'number') return blockNumber;
        return Math.max(blockNumber, state);
      });
    },
    [setState]
  );

  jsonProvider.on('block', blockNumberCallback);

  const onChainProvider = useMemo(
    () => ({
      connect: uck.connect,
      disconnect: uck.destroy,
      jsonProvider,
      connected: !!uck.address,
      address: uck.address,
      chainID: uck.network.chainId,
      blocknumber: state,
    }),
    [uck, jsonProvider, state]
  );
  return <Web3Context.Provider value={{ onChainProvider }}>{children}</Web3Context.Provider>;
};
