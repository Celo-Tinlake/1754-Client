import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100vw',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    paddingLeft: '2rem',
    paddingRight: '3rem',
  },
  title: {
    fontSize: theme.fontSizes.xl * 1.2,
  },
  controlGroup: {
    '@media (max-width: 800px)': {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      zIndex: 999,
      padding: 10,
      justifyContent: 'flex-end',
      borderTopLeftRadius: theme.radius.lg,
      borderTopRightRadius: theme.radius.lg,
    },
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
  },
  focused: {
    fontWeight: 600,
    color:
      theme.colorScheme === 'light'
        ? theme.colors[theme.primaryColor][5]
        : theme.colors[theme.primaryColor][2],
  },
}));
