import { Grid, Image, Text, Title } from '@mantine/core';
import clsx from 'clsx';
import { useRouter } from 'next/router';
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
  return (
    <Grid className={classes.container} onClick={() => router.push(`pools/${poolId}`)} mb={20}>
      <Grid.Col xs={9} md={5}>
        <Grid align="center">
          <Image src={imageUrl} height={60} width={60} radius="md" />

          <Text size="xl" component="span" ml={10}>
            {title}
            <Text color="dimmed">{caption}</Text>
          </Text>
        </Grid>
      </Grid.Col>
      <Grid.Col span={1}>
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
      <Grid.Col span={3}>
        <Text className={classes.statText}>
          {poolSize}
          <Text component="span" className={classes.statLabel}>
            {denomination}
          </Text>
        </Text>
      </Grid.Col>
      <Grid.Col span={2}>
        <Text className={classes.statText}>
          {`${(apy * 100).toFixed(2)}%`}
          <Text component="span" className={classes.statLabel}>
            {denomination}
          </Text>
        </Text>
      </Grid.Col>
    </Grid>
  );
}
