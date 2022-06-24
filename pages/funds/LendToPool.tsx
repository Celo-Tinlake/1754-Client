import { Button, Container, Group, LoadingOverlay, Title } from '@mantine/core';
import { ArrowRightIcon } from '@modulz/radix-icons';
import { useCallback, useMemo, useState } from 'react';
import { TokenAmount } from '@dahlia-labs/token-utils';
import TokenInput from '../../components/TokenInput/TokenInput';
import { CUSD } from '../../constants/addresses';
import { useFundManager } from '../../hooks/useFundManager';
import { useCusd } from '../../hooks/useTokens';
import { useApproval, useApprove } from '../../hooks/useApproval';
import { useWeb3Context } from '../../hooks/web3';
import { useFundManagerContract } from '../../hooks/useContract';
import { executeTransaction } from '../../hooks/useTransactions';

export default function LendToPool({ address }: { address: string }) {
  const { data: poolInfo, isLoading } = useFundManager(address);
  const { address: wallet } = useWeb3Context();
  const [amount, setAmount] = useState<string | undefined>();
  const cusd = useCusd();
  const parsedAmount = useMemo(() => TokenAmount.parse(cusd, amount ?? '0'), [cusd, amount]);
  const approve = useApprove(parsedAmount, address);
  const approval = useApproval(parsedAmount, wallet, address);
  const fundManager = useFundManagerContract(address);

  const deposit = useCallback(async () => {
    if (wallet && parsedAmount && parsedAmount.greaterThan('0') && fundManager) {
      if (approval) await approve();
      await executeTransaction({
        id: `deposit-pool-${address}`,
        title: `Deposit ${parsedAmount.toFixed(2)} ${parsedAmount.token.symbol} to Fund Manager`,
        callback: () => fundManager.depositSenior(parsedAmount.raw.toString(), wallet),
      });
    }
  }, [parsedAmount, wallet]);

  return isLoading ? (
    <LoadingOverlay visible={isLoading} />
  ) : (
    <Container size="lg" p={0} mt={50}>
      <Title order={3} ml={10}>
        Lend to this pool
      </Title>
      <Group style={{ width: '100%' }} position="apart" align="end">
        <TokenInput tokenAddress={CUSD} onChange={setAmount} value={amount} label="You will lend" />
        <ArrowRightIcon width={100} height={30} />
        <TokenInput
          tokenAddress={poolInfo?.seniorTrancheToken ?? poolInfo?.juniorTrancheToken ?? ''}
          value={amount && amount.length > 0 ? (parseFloat(amount) * 0.985736).toFixed(2) : '0.00'}
          label="You will receive"
          disabled
        />
        {wallet && (
          <Button radius="md" disabled={!amount} size="xl" onClick={deposit} style={{ height: 90 }}>
            {`${approval ? 'Approve and ' : ''}Deposit`}
          </Button>
        )}
      </Group>
    </Container>
  );
}
