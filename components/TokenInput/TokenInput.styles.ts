import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  container: {
    paddingTop: 0,
    paddingBottom: 0,
    display: 'flex',
    background: theme.colorScheme === 'dark' ? theme.colors.blue[9] : theme.colors.blue[1],
    borderColor: theme.colors.blue[5],
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: theme.radius.lg,
  },
  item: {
    padding: '1rem',
    marginTop: 0,
    marginBottom: 0,
    height: '100%',
  },
  leftBorder: {
    borderLeftColor: theme.colors.blue[5],
    borderLeftWidth: 2,
    borderLeftStyle: 'solid',
  },
  textInputStyle: {
    fontSize: theme.fontSizes.xl,
  },
}));
