import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 30,
    paddingLeft: 20,
    paddingBottom: 15,
    paddingTop: 15,
    alignItems: 'center',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[9] : theme.colors.gray[1],
    borderRadius: theme.radius.md,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: theme.colorScheme === 'dark' ? theme.colors.gray[7] : theme.colors.gray[3],
    transition: 'all ease-in 0.2s',
    ':hover': {
      cursor: 'pointer',
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors[theme.primaryColor][9]
          : theme.colors[theme.primaryColor][0],
      borderColor: theme.colors[theme.primaryColor][3],
    },
  },
  statText: {
    fontWeight: 600,
    fontSize: theme.fontSizes.xl,
    textAlign: 'right',
  },
  statLabel: {
    fontWeight: 300,
    opacity: 0.7,
    fontSize: theme.fontSizes.md,
    marginLeft: 5,
  },
  statusContainer: {
    width: 90,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    borderStyle: 'groove',
    borderWidth: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[7] : theme.colors.gray[2],
    borderColor: theme.colorScheme === 'dark' ? theme.colors.gray[2] : theme.colors.gray[7],
    color: theme.colorScheme === 'dark' ? theme.colors.gray[2] : theme.colors.gray[8],
    fontSize: theme.fontSizes.lg,
    fontWeight: 500,
  },
  statusContainerOpen: {
    backgroundColor: theme.colors[theme.primaryColor][0],
    borderColor: theme.colors[theme.primaryColor][6],
    color: theme.colors[theme.primaryColor][6],
  },
  statusContainerRepaid: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.green[7] : theme.colors.green[2],
    borderColor: theme.colorScheme === 'dark' ? theme.colors.green[2] : theme.colors.green[7],
    color: theme.colorScheme === 'dark' ? theme.colors.green[2] : theme.colors.green[7],
  },
}));
