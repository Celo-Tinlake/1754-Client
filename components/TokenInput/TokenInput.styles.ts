import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  container: {
    // paddingTop: 0,
    // paddingBottom: 0,
    // display: 'flex',
    background: theme.colorScheme === 'dark' ? theme.colors.blue[9] : theme.colors.blue[0],
    borderColor: theme.colors.blue[5],
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: theme.radius.lg,
    minHeight: 70,
    padding: '1rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    width: '30VW',
    minWidth: 300,
    position: 'relative',
  },
  item: {
    marginTop: 0,
    marginBottom: 0,
    height: '100%',
  },
  rightItem: {
    borderLeftColor: theme.colors.blue[5],
    borderLeftWidth: 2,
    borderLeftStyle: 'solid',
    minHeight: 70,
    paddingLeft: 10,
    position: 'absolute',
    bottom: 0,
    right: 5,
  },
  textInputStyle: {
    fontSize: theme.fontSizes.xl,
  },
}));
