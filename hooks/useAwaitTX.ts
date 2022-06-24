import { useCallback } from 'react';

import { useWeb3Context } from './web3';

export const useAwaitTX = () => {
  const { jsonProvider } = useWeb3Context();

  return useCallback(
    async (hash: string) =>
      new Promise((resolve) =>
        // eslint-disable-next-line no-promise-executor-return
        jsonProvider.once(hash, () => {
          resolve(null);
        })
      ),
    [jsonProvider]
  );
};
