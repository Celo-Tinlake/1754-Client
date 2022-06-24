import { ChainId } from '@ubeswap/sdk';
import { CELO, CEUR, CUSD, MOBI, MOO, UBE } from '@dahlia-labs/celo-tokens';
import { Token } from '@dahlia-labs/token-utils';
import { useWeb3Context } from './web3';

const _useToken = (token: { [c in ChainId]: Token }) => {
  const { chainID } = useWeb3Context();
  return token[chainID];
};

export const useCelo = () => _useToken(CELO);

export const useCusd = () => _useToken(CUSD);

export const useCeur = () => _useToken(CEUR);

export const useMobi = () => _useToken(MOBI);

export const useUbe = () => _useToken(UBE);

export const usePoof = () => _useToken(CUSD);

export const useMoo = () => _useToken(MOO);
