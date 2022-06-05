import { ColorScheme, MantineColor, MantineThemeColors, MantineThemeOverride } from '@mantine/core';

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
    'background-transparent': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
      (n) => `hsla(0, 0%, 0%, 0.${n})`
    ) as [string, string, string, string, string, string, string, string, string, string],
  },
  primaryColor: 'purple',
  primaryShade: 5,
  fontFamily: 'Avenir Next',
});
