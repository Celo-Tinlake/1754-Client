import { Title, Anchor, Container, Button, Group, Image } from '@mantine/core';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import useStyles from './Header.styles';

const routes: [string, string][] = [
  ['Home', '/'],
  ['Lend', '/lend'],
  ['Borrow', '/borrow'],
  ['Insights', '/insights'],
  ['Govern', '/govern'],
];

function NavLink({ name, path }: { name: string; path: string }) {
  const { classes } = useStyles();
  const router = useRouter();
  return (
    <Link href={path} passHref>
      <Anchor
        className={clsx(classes.nav, router.route === path && classes.focused)}
        underline={false}
      >
        {name}
      </Anchor>
    </Link>
  );
}

export function Header() {
  const { classes } = useStyles();
  return (
    <Container fluid className={classes.container}>
      <Group>
        <Image src="/assets/Logo.jpeg" height={60} radius="md" />
        <Title className={classes.title}>1754</Title>
      </Group>
      <Group>
        {routes.map(([name, path]) => (
          <NavLink {...{ name, path }} key={`nav-${name}`} />
        ))}
        <Button className={classes.connectWalletButton}>Connect Wallet</Button>
        <ColorSchemeToggle />
      </Group>
    </Container>
  );
}
