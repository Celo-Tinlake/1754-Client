import { Container, Group, SegmentedControl, Text, Title } from '@mantine/core';
import { useMemo, useState } from 'react';
import PoolRow from '../../components/PoolRow/PoolRow';
import { GridLabels } from '../../components/ThemedComponents';
import { useIsMobile } from '../../hooks/useDeviceType';
import { CustomerType, dumbyPools, PoolType } from '../../constants/info';
import useStyles from './Lend.styles';

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
