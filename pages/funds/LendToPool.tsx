import { Button, Container, Group, Loader, LoadingOverlay, Title } from '@mantine/core';
import { ArrowRightIcon } from '@modulz/radix-icons';
import { useState } from 'react';
import TokenInput from '../../components/TokenInput/TokenInput';
import { CUSD } from '../../constants/addresses';
import { useFundManager } from '../../hooks/useFundManager';

export default function LendToPool({ address }: { address: string }) {
  const { data: poolInfo, isLoading } = useFundManager(address);
  const [amount, setAmount] = useState<string | undefined>();

  return isLoading ? (
    <LoadingOverlay visible={isLoading} />
  ) : (
    <Container size="lg" p={0}>
      <Title order={2}>Lend to this pool</Title>
      <Group style={{ width: '100%' }} position="apart">
        <TokenInput tokenAddress={CUSD} onChange={setAmount} value={amount} label="You will lend" />
        <ArrowRightIcon width={100} height={30} />
        <TokenInput
          tokenAddress={poolInfo?.seniorTrancheToken ?? poolInfo?.juniorTrancheToken ?? ''}
          value={amount && amount.length > 0 ? (parseFloat(amount) * 0.985736).toFixed(2) : '0.00'}
          label="You will receive"
        />
        <Button radius="md" disabled={!amount} size="xl">
          Deposit
        </Button>
      </Group>
    </Container>
  );
}
