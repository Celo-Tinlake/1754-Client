import { Grid, Text } from '@mantine/core';
import clsx from 'clsx';
import * as React from 'react';
import useStyles from './ThemedComponents.styles';

export const RowBetween = ({ className, ...props }: { className?: string; [x: string]: any }) => {
  const { classes } = useStyles();
  return <div className={clsx(classes.rowBetween, className)} {...props} />;
};

export const GridLabels = ({
  labels,
  ...props
}: {
  labels: {
    label: string;
    className?: string;
    span?: number;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  }[];
}) => {
  const { classes } = useStyles();
  return (
    <Grid {...props}>
      {labels.map(({ label, className, ...rest }) => (
        <Grid.Col {...rest}>
          <Text className={clsx(classes.label, className)}>{label}</Text>
        </Grid.Col>
      ))}
    </Grid>
  );
};
