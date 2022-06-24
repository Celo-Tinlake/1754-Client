import { Grid, Group, Image, Text } from '@mantine/core';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useIsMobile } from '../../hooks/useDeviceType';
import useStyles from './PoolRow.styles';

type PoolStatus = 'Open' | 'Full' | 'Repaid';

interface PoolRowProps {
  poolId: string;
  imageUrl: string;
  title: string;
  caption: string;
  status: PoolStatus;
  poolSize: string;
  apy: number;
  denomination: string;
}

export default function PoolRow({
  poolId,
  imageUrl,
  title,
  caption,
  status,
  poolSize,
  apy,
  denomination,
}: PoolRowProps) {
  const { classes } = useStyles();
  const router = useRouter();
  const isMobile = useIsMobile();
  return (
    <Grid
      className={classes.container}
      onClick={() => router.push(`funds?id=${poolId}`)}
      mb={20}
      grow
      columns={12}
    >
      <Grid.Col xs={5} className={classes.poolTitle}>
        <Group align="center" p={0} spacing={0}>
          <Image src={imageUrl} height={60} width={60} radius="md" />

          <Text size={isMobile ? 'md' : 'lg'} component="span" ml={10}>
            {title}
            <Text color="dimmed">{caption}</Text>
          </Text>
        </Group>
      </Grid.Col>
      {!isMobile && (
        <Grid.Col xs={1} sm={1}>
          <Text
            className={clsx(
              classes.statusContainer,
              status === 'Open' && classes.statusContainerOpen,
              status === 'Repaid' && classes.statusContainerRepaid
            )}
          >
            {status}
          </Text>
        </Grid.Col>
      )}
      <Grid.Col xs={3}>
        <Text className={classes.statText}>
          {isMobile && (
            <Text className={clsx(classes.statLabel, classes.mobileLabel)}>Pool Size: </Text>
          )}
          <Group align="baseline" spacing={0} position="right">
            {poolSize}
            <Text component="span" className={classes.statLabel}>
              {denomination}
            </Text>
          </Group>
        </Text>
      </Grid.Col>
      <Grid.Col xs={2}>
        <Text className={classes.statText}>
          {isMobile && <Text className={clsx(classes.statLabel, classes.mobileLabel)}>APY: </Text>}
          <Group align="baseline" spacing={0} position="right">
            {`${(apy * 100).toFixed(2)}%`}
            <Text component="span" className={classes.statLabel}>
              {denomination}
            </Text>
          </Group>
        </Text>
      </Grid.Col>
      {isMobile && (
        <Text
          className={clsx(
            classes.statusContainer,
            status === 'Open' && classes.statusContainerOpen,
            status === 'Repaid' && classes.statusContainerRepaid
          )}
          ml="auto"
        >
          {status}
        </Text>
      )}
    </Grid>
  );
}
