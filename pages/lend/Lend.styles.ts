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
  purpleText: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors[theme.primaryColor][2]
        : theme.colors[theme.primaryColor][5],
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
