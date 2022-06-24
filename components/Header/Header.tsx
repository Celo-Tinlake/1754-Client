import { Title, Anchor, Container, Group, Image, Burger, Drawer, Stack, Text } from '@mantine/core';
import { useClickOutside, useToggle } from '@mantine/hooks';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useIsMobile } from '../../hooks/useDeviceType';
import useStyles from './Header.styles';
import WalletConnectionGroup from './WalletConnectionGroup';

const routes: [string, string, boolean][] = [
  ['Home', '/', true],
  ['Lend', '/lend', true],
  ['Borrow', '/borrow', false],
  ['Insights', '/insights', false],
  ['Govern', '/govern', false],
];

function NavLink({ name, path, enabled }: { name: string; path: string; enabled?: boolean }) {
  const { classes } = useStyles();
  const router = useRouter();
  return enabled ? (
    <Link href={path} passHref>
      <Anchor
        className={clsx(classes.nav, router.route === path && classes.focused)}
        underline={false}
      >
        {name}
      </Anchor>
    </Link>
  ) : (
    <Text className={clsx(classes.nav, router.route === path && classes.focused)}>{name}</Text>
  );
}

function Hamburger({ children }: { children: JSX.Element[] }) {
  const [showMenu, toggleMenu] = useToggle(false, [false, true]);
  useClickOutside(() => toggleMenu(false));

  return (
    <>
      <Burger opened={showMenu} onClick={() => toggleMenu()} />
      <Drawer opened={showMenu} onClose={() => toggleMenu()} zIndex={999} position="right">
        <Stack pl={30}>{children}</Stack>
      </Drawer>
    </>
  );
}

function Nav() {
  const isMobile = useIsMobile();
  const Parent = isMobile ? Hamburger : Group;
  return (
    <Parent>
      {routes.map(([name, path, enabled]) => (
        <NavLink {...{ name, path, enabled }} key={`nav-${name}`} />
      ))}
    </Parent>
  );
}

export function Header() {
  const { classes } = useStyles();
  return (
    <Container fluid className={classes.container}>
      <Group pl={0}>
        <Image src="/assets/Logo.jpeg" height={60} width={60} radius="md" />
        <Title className={classes.title}>1754</Title>
      </Group>
      <Group>
        <Nav />
        <WalletConnectionGroup />
      </Group>
    </Container>
  );
}
