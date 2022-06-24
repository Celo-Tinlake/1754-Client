import UBESWAP_TOKEN_LIST from '@node-fi/default-token-list';
import { ChainId, Token } from '@ubeswap/sdk';
import { Tags, TokenInfo, TokenList } from '@uniswap/token-lists';
import { useMemo } from 'react';
import { useWeb3Context } from './web3';

type TagDetails = Tags[keyof Tags];
export interface TagInfo extends TagDetails {
  id: string;
}

/**
 * Token instances created from token info.
 */
export class WrappedTokenInfo extends Token {
  public readonly tokenInfo: TokenInfo;
  public readonly tags: TagInfo[];
  constructor(tokenInfo: TokenInfo, tags: TagInfo[]) {
    super(
      tokenInfo.chainId,
      tokenInfo.address,
      tokenInfo.decimals,
      tokenInfo.symbol,
      tokenInfo.name
    );
    this.tokenInfo = tokenInfo;
    this.tags = tags;
  }
  public get logoURI(): string | undefined {
    return this.tokenInfo.logoURI;
  }
}

export type TokenAddressMap = Readonly<{
  [chainId: number]: Readonly<{
    [tokenAddress: string]: { token: WrappedTokenInfo; list: TokenList };
  }>;
}>;

/**
 * An empty result, useful as a default.
 */
const EMPTY_LIST: TokenAddressMap = {
  [ChainId.MAINNET]: {},
  [ChainId.ALFAJORES]: {},
  [ChainId.BAKLAVA]: {},
};

const listCache: WeakMap<TokenList, TokenAddressMap> | null =
  typeof WeakMap !== 'undefined' ? new WeakMap<TokenList, TokenAddressMap>() : null;

export function listToTokenMap(list: TokenList): TokenAddressMap {
  const result = listCache?.get(list);
  if (result) return result;

  const map = list.tokens.reduce<TokenAddressMap>(
    (tokenMap, tokenInfo) => {
      const tags: TagInfo[] =
        tokenInfo.tags
          ?.map((tagId) => {
            if (!list.tags?.[tagId]) return undefined;
            return { ...list.tags[tagId], id: tagId };
          })
          ?.filter((x): x is TagInfo => Boolean(x)) ?? [];
      const token = new WrappedTokenInfo(
        {
          ...tokenInfo,
          name: tokenInfo.name,
        },
        tags
      );
      if (tokenMap[token.chainId]?.[token.address] !== undefined) {
        throw Error(`Duplicate tokens found for ${token.name}`);
      }
      return {
        ...tokenMap,
        [token.chainId]: {
          ...tokenMap[token.chainId],
          [token.address]: {
            token,
            list,
          },
        },
      };
    },
    { ...EMPTY_LIST }
  );
  listCache?.set(list, map);
  return map;
}

// used to hide warnings on import for default tokens
export function useDefaultTokenList(): TokenAddressMap {
  return {
    ...listToTokenMap(UBESWAP_TOKEN_LIST),
  };
}

// reduce token map into standard address <-> Token mapping, optionally include user added tokens
function useTokensFromMap(
  tokenMap: TokenAddressMap,
  includeUserAdded: boolean
): { [address: string]: Token } {
  const { chainID: chainId } = useWeb3Context();

  return useMemo(() => {
    if (!chainId) return {};

    // reduce to just tokens
    const mapWithoutUrls = Object.keys(tokenMap[chainId]).reduce<{
      [address: string]: Token;
    }>((newMap, address) => {
      // eslint-disable-next-line no-param-reassign
      newMap[address] = tokenMap[chainId][address].token;
      return newMap;
    }, {});
    return mapWithoutUrls;
  }, [chainId, tokenMap, includeUserAdded]);
}

export function useDefaultTokens(): { [address: string]: Token } {
  const defaultList = useDefaultTokenList();
  const tokensFromMap = useTokensFromMap(defaultList, false);
  return useMemo(() => tokensFromMap, []);
}

export function useToken(address: string): Token | undefined {
  const tokens = useDefaultTokens();
  return tokens[address];
}
