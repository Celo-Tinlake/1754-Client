import { Container, Group, Space, Text, Title } from '@mantine/core';
import clsx from 'clsx';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { ChevronLeftIcon } from '@modulz/radix-icons';
import PoolRow from '../../components/PoolRow/PoolRow';
import { getPool } from '../../constants/info';
import useStyles from './Funds.styles';
import LendToPool from './LendToPool';
import Profile from '../../components/Profile/Profile';
import PortfolioBook from './PortfolioBook/PortfolioBook';

const blurbs = [
  {
    title: 'Fund Details',
    body: 'Passively invest in a diversified portfolio of debt deployed across the highest performing funds. Senior pool investors are protected by Junior pool capital in exchange for slightly lower, more stable yield.',
  },
  {
    title: 'Fund Managers',
    body: 'Passively invest in a diversified portfolio of debt deployed across the highest performing funds. Senior pool investors are protected by Junior pool capital in exchange for slightly lower, more stable yield.',
    people: [
      {
        first: 'Alex',
        last: 'Liege',
        role: 'CEO',
      },
      {
        first: 'Robert',
        last: 'Greenfield',
        role: 'Strategy',
      },
      {
        first: 'Fabien',
        last: 'Dureuil',
        role: 'Strategy',
      },
    ],
  },
  {
    title: 'Company Details',
    body: 'Passively invest in a diversified portfolio of debt deployed across the highest performing funds. Senior pool investors are protected by Junior pool capital in exchange for slightly lower, more stable yield.',
  },
];

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
          <Space h="md" />
          {blurbs.map(({ title, body, people }) => (
            <>
              <Title order={3} mt="xl">
                {title}
              </Title>
              <Text mt={15} size="xl" color="gray">
                {body}
              </Text>
              {people && (
                <Group mt={50}>
                  {people.map((p) => (
                    <Profile {...p} />
                  ))}
                </Group>
              )}
            </>
          ))}
          <Text mt={15} size="xl" color="gray">
            Location: Berkeley, CA. USA
          </Text>
          <PortfolioBook />
        </Container>
      )}
    </>
  );
}
