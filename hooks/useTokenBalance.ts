import type { Token } from '@dahlia-labs/token-utils';
import { TokenAmount } from '@dahlia-labs/token-utils';
import { AddressZero } from '@ethersproject/constants';
import invariant from 'tiny-invariant';

import { parseFunctionReturn } from '../utils/parseFunctionReturn';
import { useBlockQuery, Call } from './useBlockQuery';
import { useTokenContract } from './useContract';

export const useTokenBalance = (token: Token, address: string | null): TokenAmount | null => {
  const tokenContract = useTokenContract(AddressZero, false);
  invariant(tokenContract);

  const call: Call = {
    target: token.address,
    callData: tokenContract.interface.encodeFunctionData('balanceOf', [address ?? AddressZero]),
  };

  const { data } = useBlockQuery('balance', [call], [token.address, address], !!address);
  if (!data) return null;
  return new TokenAmount(
    token,
    parseFunctionReturn(tokenContract.interface, 'balanceOf', data?.returnData[0]).toString()
  );
};

export const useTokenBalances = (
  tokens: (Token | null)[],
  address?: string | null
): (TokenAmount | null)[] | null => {
  const tokenContract = useTokenContract(AddressZero, false);
  invariant(tokenContract, 'contract');

  const calls: Call[] = tokens.map((t) => ({
    target: t?.address ?? AddressZero,
    callData: tokenContract.interface.encodeFunctionData('balanceOf', [address ?? AddressZero]),
  }));

  const { data } = useBlockQuery(
    'balance',
    calls,
    [address].concat(tokens.map((t) => t?.address)),
    !!address
  );
  if (!data) return null;
  return tokens.map((t, i) =>
    t
      ? new TokenAmount(
          t,
          parseFunctionReturn(tokenContract.interface, 'balanceOf', data?.returnData[i]).toString()
        )
      : null
  );
};
