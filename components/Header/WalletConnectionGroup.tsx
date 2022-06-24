import { Button, Group } from '@mantine/core';
import { useWeb3Context } from '../../hooks/web3';
import { shortenAddress } from '../../utils';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import useStyles from './Header.styles';

function WalletButton() {
  const { classes } = useStyles();

  const { address, connect, disconnect } = useWeb3Context();

  return address ? (
    <Button className={classes.connectWalletButton} onClick={disconnect}>
      {shortenAddress(address)}
    </Button>
  ) : (
    <Button className={classes.connectWalletButton} onClick={connect}>
      Connect Wallet
    </Button>
  );
}

export default function WalletConnectionGroup() {
  const { classes } = useStyles();
  return (
    <Group className={classes.controlGroup}>
      <WalletButton />
      <ColorSchemeToggle />
    </Group>
  );
}
