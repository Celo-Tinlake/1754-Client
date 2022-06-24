import { useProvider, useProviderOrSigner } from '@celo-tools/use-contractkit';
import type { ContractInterface } from '@ethersproject/contracts';
import { Contract } from '@ethersproject/contracts';
import { useMemo } from 'react';
import type { JsonRpcProvider, JsonRpcSigner } from '@ethersproject/providers';
import { getAddress } from '@ethersproject/address';
import { Multicall } from '@dahlia-labs/celo-contrib';
import { Erc20, MicroLoanFactory } from '../src/generated';

import MICRO_LOAN_FACTORY_ABI from '../constants/abis/micro_loans/MicroLoanFactory.json';
import FUND_MANAGER_ABI from '../constants/abis/micro_loans/FundManager.json';
import ERC20_ABI from '../constants/abis/erc20.json';
import { useWeb3Context } from './web3';
import { MicroLoanFactoryAddress } from '../constants/addresses';
import { FundManager } from '../src/generated/micro_loans/FundManager';
import { Multicall2 } from '../src/generated/Multicall2';
import MULITCALL_ABI from '../constants/abis/multicall2.json';

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: string): string | false {
  try {
    return getAddress(value);
  } catch {
    return false;
  }
}

// account is optional
export function getContract(
  address: string,
  ABI: ContractInterface,
  provider: JsonRpcProvider | JsonRpcSigner
): Contract {
  if (!isAddress(address)) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  return new Contract(address, ABI, provider);
}

function useContract(
  address: string | undefined,
  ABI: ContractInterface,
  withSignerIfPossible = true
): Contract | null {
  const provider = useProvider();
  const signer = useProviderOrSigner();
  const { chainID } = useWeb3Context();
  return useMemo(() => {
    if (!address || !ABI) return null;
    try {
      return getContract(address, ABI, withSignerIfPossible ? signer : provider);
    } catch (error) {
      console.error('Failed to get contract', error);
      return null;
    }
  }, [address, ABI, withSignerIfPossible, signer, provider]);
}

export function useMicroLoanFactoryContract(): MicroLoanFactory | null {
  const { chainID } = useWeb3Context();
  return useContract(
    MicroLoanFactoryAddress[chainID],
    MICRO_LOAN_FACTORY_ABI,
    true
  ) as unknown as MicroLoanFactory | null;
}

export function useFundManagerContract(address: string): FundManager | null {
  return useContract(address, FUND_MANAGER_ABI, true) as unknown as FundManager | null;
}

export function useTokenContract(
  tokenAddress?: string,
  withSignerIfPossible?: boolean
): Erc20 | null {
  return useContract(tokenAddress, ERC20_ABI, withSignerIfPossible) as Erc20 | null;
}

export function useMulticall(): Multicall2 | null {
  const { chainID } = useWeb3Context();
  return useContract(Multicall[chainID], MULITCALL_ABI, false) as Multicall2 | null;
}
