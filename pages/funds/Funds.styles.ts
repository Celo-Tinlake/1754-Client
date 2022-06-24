import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  container: {
    paddingTop: '2rem',
    paddingBottom: '5rem',
    background: `linear-gradient(90deg, ${theme.colors[theme.primaryColor][6]}, ${
      theme.colors[theme.primaryColor][3]
    })`,
  },
  textGroup: {
    color: theme.white,
    textDecoration: 'none',
  },
  offSetLeft: {
    position: 'absolute',
    left: -50,
  },
  title: {
    display: 'flex',
    position: 'relative',
    alignContent: 'center',
    alignItems: 'center',
  },
  purpleText: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors[theme.primaryColor][3]
        : theme.colors[theme.primaryColor][6],
  },
  pointer: {
    transition: 'all ease-in 0.3',
    ':hover': {
      cursor: 'pointer',
      opacity: 0.8,
    },
  },
  description: {
    opacity: 0.8,
    fontSize: theme.fontSizes.md * 1.1,
  },
  right: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
  },
}));
