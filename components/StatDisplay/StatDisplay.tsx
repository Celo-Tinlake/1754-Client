import { Grid, Text } from '@mantine/core';
import clsx from 'clsx';
import { useCallback } from 'react';
import { useDeviceType } from '../../hooks/useDeviceType';
import { isEven } from '../../utils';
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
  const deviceType = useDeviceType();

  const makeClass = useCallback(
    (i: number) => {
      if (i === stats.length - 1) return '';
      const objectClasses = [];
      if (deviceType.match(/(mobileLandscape|tablet.)/)) {
        if (isEven(i)) objectClasses.push(classes.borderRight);
        if (i !== Math.floor(stats.length / 2)) objectClasses.push(classes.borderBottom);
      } else if (deviceType.match(/(mobile)/)) {
        objectClasses.push(classes.borderBottom);
      } else {
        objectClasses.push(classes.borderRight);
      }
      return clsx(objectClasses);
    },
    [deviceType, stats]
  );
  return (
    <Grid className={classes.container}>
      {stats.map(({ title, content, label }, i) => (
        <Grid.Col className={clsx(classes.text, classes.statBlock, makeClass(i))} xs={6} md={3}>
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
