import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  container: {
    color: theme.white,
    backgroundColor: theme.colors['background-transparent'][2],
    borderRadius: theme.radius.md * 1.5,
    padding: '1rem',
    justifyContent: 'center',
  },
  statBlock: {
    paddingLeft: 20,
  },
  borderRight: {
    borderRightWidth: 1.5,
    borderRightColor: theme.white,
    borderRightStyle: 'ridge',
  },
  borderBottom: {
    borderBottomWidth: 1.5,
    borderBottomColor: theme.white,
    borderBottomStyle: 'ridge',
  },
  text: {
    fontSize: theme.fontSizes.lg,
  },
  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 600,
  },
  content: {
    fontSize: theme.fontSizes.lg * 1.2,
    fontWeight: 650,
  },
  label: {
    fontSize: theme.fontSizes.md,
    opacity: 0.9,
  },
}));
