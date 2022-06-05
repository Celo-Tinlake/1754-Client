import { Grid, Text } from '@mantine/core';
import clsx from 'clsx';
import useStyles from './StatDisplay.styles';

interface StatInfo {
  title: string;
  content: string;
  label?: string;
}

interface StatDisplayProps {
  stats: StatInfo[];
}

export default function StatDisplay({ stats }: StatDisplayProps) {
  const { classes } = useStyles();
  return (
    <Grid className={classes.container}>
      {stats.map(({ title, content, label }, i) => (
        <Grid.Col
          className={clsx(
            classes.text,
            classes.statBlock,
            i < stats.length - 1 && classes.borderRight
          )}
          sm={6}
          md={3}
        >
          <Text className={clsx(classes.text, classes.title)}>{title}</Text>
          <Text className={clsx(classes.text, classes.content)}>
            {`${content}`}{' '}
            {label && (
              <Text className={clsx(classes.text, classes.label)} component="span">
                {label}
              </Text>
            )}
          </Text>
        </Grid.Col>
      ))}
    </Grid>
  );
}
