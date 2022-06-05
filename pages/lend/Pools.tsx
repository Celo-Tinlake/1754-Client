import { Container, Group, SegmentedControl, Text, Title } from '@mantine/core';
import { useMemo, useState } from 'react';
import PoolRow from '../../components/PoolRow/PoolRow';
import { GridLabels } from '../../components/ThemedComponents';
import { useIsMobile } from '../../hooks/useDeviceType';
import useStyles from './Lend.styles';

type PoolType = 'Senior' | 'Junior';

type CustomerType = 'Enterprise' | 'Consumer' | 'All';

interface PoolRowProps {
  poolId: string;
  imageUrl: string;
  customerType: CustomerType;
  title: string;
  caption: string;
  status: 'Open' | 'Repaid' | 'Full';
  poolSize: string;
  apy: number;
  denomination: string;
}

const dumbyImage = 'https://avatars.githubusercontent.com/u/106453086?s=200&v=4';

const dumbyPools: { [t in PoolType]: PoolRowProps[] } = {
  Senior: [
    {
      poolId: 'abc',
      imageUrl: dumbyImage,
      customerType: 'Enterprise',
      title: 'Latin America Fund',
      caption: 'Diversified Portfolio',
      status: 'Open',
      poolSize: '10,000,000',
      apy: 0.089,
      denomination: 'cUSD',
    },
    {
      poolId: '123',
      imageUrl: dumbyImage,
      customerType: 'Consumer',
      title: 'Personal Loan Fund',
      caption: 'Diversified Portfolio',
      status: 'Open',
      poolSize: '200,000',
      apy: 0.134,
      denomination: 'cUSD',
    },
    {
      poolId: '456',
      imageUrl: dumbyImage,
      customerType: 'Consumer',
      title: 'Cash Advance Fund',
      caption: 'Diversified Portfolio',
      status: 'Open',
      poolSize: '100,000',
      apy: 0.142,
      denomination: 'cUSD',
    },
  ],
  Junior: [
    {
      poolId: 'hjk',
      imageUrl: dumbyImage,
      customerType: 'Enterprise',
      title: 'Cauris Africa Innovaion & Enterprise',
      caption: 'Fintech Debt Financing',
      status: 'Open',
      poolSize: '1,000,000',
      apy: 0.149,
      denomination: 'cUSD',
    },
    {
      poolId: 'brc',
      imageUrl: dumbyImage,
      customerType: 'Enterprise',
      title: 'Branch Series 3 (1754 Factory)',
      caption: 'Emerging Market Consumer Loans',
      status: 'Open',
      poolSize: '5,000,000',
      apy: 0.132,
      denomination: 'cUSD',
    },
    {
      poolId: 'tere',
      imageUrl: dumbyImage,
      customerType: 'Enterprise',
      title: 'Roda Columbia Motorbike Fund',
      caption: 'Emerging Market Consumer Loans',
      status: 'Full',
      poolSize: '100,000',
      apy: 0.118,
      denomination: 'cUSD',
    },
    {
      poolId: 'abc',
      imageUrl: dumbyImage,
      customerType: 'Enterprise',
      title: 'Bling Series 1 (1754 Factory)',
      caption: 'Payment Advances',
      status: 'Repaid',
      poolSize: '300,000',
      apy: 0.139,
      denomination: 'cUSD',
    },
  ],
};

const description = {
  Senior: `Passively invest in a diversified portfolio of debt deployed across the highest performing
  funds. Senior pool investors are protected by Junior pool capital in exchange for slightly
  lower, more stable yield.`,
  Junior: `Directly fund specific loans to earn higher APY, but bare more risk. Senior pool investors
   receive their principal and interest back before the unior pool starts receiving its payments.
   Junior pool investors typically enter into legal agreements with the borrowers.`,
};

export default function Pools({ type }: { type: PoolType }) {
  const { classes } = useStyles();
  const isMobile = useIsMobile();
  const [customerType, setCustomerType] = useState<CustomerType>('Enterprise');
  const pools = useMemo(
    () => dumbyPools[type].filter(({ customerType: ct }) => ct === customerType),
    [customerType, type]
  );

  return (
    <Container size="lg" mt={30} mb={20}>
      <Group position="apart">
        <Title order={3} className={classes.purpleText}>{`${type} Lending Pools`}</Title>
        <SegmentedControl
          onChange={setCustomerType as (value: string) => void}
          data={[
            { value: 'Enterprise', label: 'Enterprise' },
            { value: 'Consumer', label: 'Consumer' },
          ]}
          radius="md"
        />
      </Group>
      <Text className={classes.description} pt={20} pb={30}>
        {description[type]}
      </Text>
      {!isMobile && (
        <GridLabels
          labels={[
            { label: 'Pool', xs: 5 },
            { label: 'Status', xs: 2, sm: 1, className: classes.right },
            { label: 'Pool Size', xs: 3, className: classes.right },
            { label: 'Est. APY', xs: 2, className: classes.right },
          ]}
          pl={20}
          pr={30}
          grow
        />
      )}
      {pools.map((pool) => (
        <PoolRow {...pool} />
      ))}
    </Container>
  );
}
