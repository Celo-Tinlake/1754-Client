import { Button, Group } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import useStyles from './Header.styles';

export default function WalletConnectionGroup() {
  const { classes } = useStyles();
  return (
    <Group className={classes.controlGroup}>
      <Button className={classes.connectWalletButton}>Connect Wallet</Button>
      <ColorSchemeToggle />
    </Group>
  );
}
