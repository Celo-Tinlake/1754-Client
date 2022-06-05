import { Anchor, Container, Group, Text } from '@mantine/core';
import clsx from 'clsx';
import useStyles from './Footer.styles';

const routes: [string, string][] = [
  ['Discord', '/'],
  ['Twitter', '/lend'],
  ['Terms of Service', '/borrow'],
  ['Privacy Policy', '/insights'],
];

function ExternalNavLink({ name, path }: { name: string; path: string }) {
  const { classes } = useStyles();
  return (
    <Anchor className={clsx(classes.nav)} href={path} underline={false} target="_blank">
      {name}
    </Anchor>
  );
}

export function Footer1754() {
  const { classes } = useStyles();
  return (
    <Container fluid className={classes.container}>
      <Text className={classes.nav}>1754 Factory, LLC. All Rights Reserved, 2022.</Text>
      <Group>
        {routes.map(([name, path]) => (
          <ExternalNavLink {...{ name, path }} key={`nav-${name}`} />
        ))}
      </Group>
    </Container>
  );
}
