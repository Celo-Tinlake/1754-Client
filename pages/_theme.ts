import { ColorScheme, MantineThemeOverride } from '@mantine/core';

export const genTheme = (colorScheme: ColorScheme): MantineThemeOverride => ({
  colorScheme,
  colors: {
    purple: [
      '#f2ebff',
      '#dac4ff',
      '#c19dff',
      '#a876ff',
      '#8f4eff',
      '#7f36ff',
      '#7627ff',
      '#5d00ff',
      '#4e00d8',
      '#4000b1',
    ],
    'light-green': [
      '#edf8f2',
      '#c8ead8',
      '#c8ead8',
      '#c8ead8',
      '#5abf89',
      '#40a56f',
      '#328157',
      '#328157',
      '#153725',
      '#07120c',
    ],
  },
  primaryColor: 'purple',
  primaryShade: 5,
});
