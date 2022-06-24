import { Container, Text, Title } from '@mantine/core';
import clsx from 'clsx';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import PoolRow from '../../components/PoolRow/PoolRow';
import { getPool } from '../lend/info';
import useStyles from './Funds.styles';
import { ChevronLeftIcon } from '@modulz/radix-icons';
import LendToPool from './LendToPool';

export default function FundPage() {
  const router = useRouter();
  const { id } = router.query;
  const pool = getPool(id as string);
  const { classes } = useStyles();

  const goBack = useCallback(() => router.back(), [router]);

  return (
    <>
      <Head>
        <title>{`1754 - Fund ${id}`}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/assets/Logo.jpeg" />
      </Head>
      {!pool ? (
        <Text>Pool Does Not Exist</Text>
      ) : (
        <Container size="lg" mt={30} mb={20}>
          <Title
            onClick={goBack}
            className={clsx(classes.purpleText, classes.pointer, classes.title)}
            mb={20}
            order={2}
          >
            <ChevronLeftIcon width={30} height={30} className={classes.offSetLeft} />

            {`${pool.company} ${pool.type} Pool`}
          </Title>
          <PoolRow {...pool} />
          <LendToPool address={pool.address} />
        </Container>
      )}
    </>
  );
}
