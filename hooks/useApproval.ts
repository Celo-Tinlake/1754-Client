import type { Token } from '@dahlia-labs/token-utils';
import { TokenAmount } from '@dahlia-labs/token-utils';
import { AddressZero, MaxUint256 } from '@ethersproject/constants';
import { useCallback, useMemo } from 'react';
import invariant from 'tiny-invariant';

import { parseFunctionReturn } from '../utils/parseFunctionReturn';
import { useBlockQuery, Call } from './useBlockQuery';
import { useTokenContract } from './useContract';

export const useTokenAllowance = (
  token: Token | null | undefined,
  address: string | null | undefined,
  spender: string | null | undefined
): TokenAmount | null => {
  const tokenContract = useTokenContract(AddressZero, false);
  invariant(tokenContract);

  const call: Call = {
    target: token?.address ?? AddressZero,
    callData: tokenContract.interface.encodeFunctionData('allowance', [
      address ?? AddressZero,
      spender ?? AddressZero,
    ]),
  };

  const { data } = useBlockQuery(
    'allowance',
    [call],
    [token?.address, address, spender],
    !!token && !!address && !!spender
  );
  if (!data || !data.returnData || !address || !spender || !token) return null;

  const allowance = parseFunctionReturn(tokenContract.interface, 'allowance', data?.returnData[0]);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return new TokenAmount(token, allowance[0]);
};

// returns true if the token needs approval
export const useApproval = (
  tokenAmount: TokenAmount | null | undefined,
  address: string | null | undefined,
  spender: string | null | undefined
): boolean | null => {
  const allowance = useTokenAllowance(tokenAmount?.token, address, spender);

  return useMemo(
    () => (!allowance || !tokenAmount ? null : tokenAmount.greaterThan(allowance)),
    [allowance, tokenAmount]
  );
};

export const useTokenAllowances = (
  tokens: (Token | null | undefined)[],
  address: string | null | undefined,
  spender: string | null | undefined
): (TokenAmount | null)[] | null => {
  const tokenContract = useTokenContract(AddressZero, false);
  invariant(tokenContract);

  const calls: Call[] = tokens.map((t) => ({
    target: t?.address ?? AddressZero,
    callData: tokenContract.interface.encodeFunctionData('allowance', [
      address ?? AddressZero,
      spender ?? AddressZero,
    ]),
  }));

  const { data } = useBlockQuery(
    'allowance',
    calls,
    [...tokens.map((t) => t?.address), address, spender],
    !!address && !!spender
  );
  if (!data) return null;

  return tokens.map((t, i) =>
    t
      ? new TokenAmount(
          t,
          parseFunctionReturn(tokenContract.interface, 'allowance', data?.returnData[i]).toString()
        )
      : null
  );
};

export function useApprove(
  amount: TokenAmount | undefined | null,
  spender: string | null | undefined
) {
  const tokenContract = useTokenContract(amount?.token.address ?? AddressZero);

  return useCallback(async () => {
    invariant(tokenContract, 'contract');
    invariant(amount && amount.greaterThan(0), 'amount');
    invariant(spender, 'approve spender');
    const res = await tokenContract.approve(spender, MaxUint256);
    return res;
  }, [amount, spender, tokenContract]);
}
