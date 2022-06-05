import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  rowBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  label: {
    opacity: 0.8,
    fontSize: theme.fontSizes.md * 1.1,
    textAlign: 'left',
  },
}));
