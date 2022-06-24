import { useProvider } from '@celo-tools/use-contractkit';
import ENS from '@ensdomains/ensjs';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import invariant from 'tiny-invariant';

import { useWeb3Context } from './web3';

const NOM_REGISTRY_ADDRESS = '0x3DE51c3960400A0F752d3492652Ae4A0b2A36FB3';

export const useUserNom = (): string | null => {
  const { address, connected } = useWeb3Context();
  const provider = useProvider();

  interface ENS {
    getName: (address: string) => Promise<{ name: string }>;
  }

  const ens = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const ens: ENS = new ENS({
      provider,
      ensAddress: NOM_REGISTRY_ADDRESS,
    }) as ENS;
    return ens;
  }, [provider]);

  const { data } = useQuery(
    ['nom', address, connected],
    async () => {
      invariant(address);
      const { name } = await ens.getName(address);
      return name;
    },
    { staleTime: Infinity, enabled: !!address }
  );

  return data?.concat('.nom') ?? null;
};
