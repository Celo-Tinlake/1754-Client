import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100vw',
    paddingTop: '5rem',
    paddingBottom: '1rem',
    paddingLeft: '3rem',
    paddingRight: '3rem',
  },
  title: {
    fontSize: theme.fontSizes.xl * 1.2,
  },
  connectWalletButton: {
    backgroundColor: theme.colors[theme.primaryColor][7],
    color: theme.white,
    fontSize: theme.fontSizes.md,
  },
  nav: {
    textDecoration: 'none',
    color: theme.colorScheme === 'light' ? theme.black : theme.white,
    fontSize: theme.fontSizes.lg,
    opacity: 0.6,
  },
  focused: {
    fontWeight: 600,
    color:
      theme.colorScheme === 'light'
        ? theme.colors[theme.primaryColor][5]
        : theme.colors[theme.primaryColor][2],
  },
}));
