import { useQuery, useQueryClient } from 'react-query';

import { useMulticall } from './useContract';
import { useWeb3Context } from './web3';

export interface Call {
  target: string;
  callData: string;
}

const blockHistory = 5;

export const useBlockQuery = (
  name: string,
  calls: Call[],
  deps: (string | number | boolean | null | undefined)[] | null = null,
  enabled = true,
  block = true
) => {
  const { blocknumber } = useWeb3Context();
  const queryClient = useQueryClient();
  const multicall = useMulticall();

  const hash = deps !== null ? deps : calls;

  const query = useQuery(
    [name, ...hash, block ? blocknumber ?? 0 : null],
    () => multicall?.callStatic.aggregate(calls),
    {
      staleTime: Infinity,
      enabled,
      placeholderData:
        block && blocknumber
          ? [...Array(blockHistory)]
              .map((_, i) => blocknumber - i - 1)
              .reduce(
                (acc, cur: number) => acc ?? queryClient.getQueryData([name, ...hash, cur]),
                undefined
              ) ?? queryClient.getQueryData([name, ...hash, 0])
          : undefined,
    }
  );

  return query;
};
