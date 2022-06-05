import { useMediaQuery, useViewportSize } from '@mantine/hooks';

type DeviceType = 'mobile' | 'tablet' | 'desktop';
type Orientation = 'Portrait' | 'Landscape';

export type DeviceAndOrientation = `${DeviceType}${Orientation}`;

const breakpoints: { minWidth: number; device: DeviceAndOrientation }[] = [
  { minWidth: 320, device: 'mobilePortrait' },
  { minWidth: 577, device: 'mobileLandscape' },
  { minWidth: 641, device: 'tabletPortrait' },
  { minWidth: 961, device: 'tabletLandscape' },
  { minWidth: 1025, device: 'desktopPortrait' },
];

export function useDeviceType(): DeviceAndOrientation {
  const { width } = useViewportSize();

  return breakpoints.filter(({ minWidth }) => width >= minWidth).at(-1)?.device ?? 'mobilePortrait';
}

export const useIsMobile = () => useMediaQuery('(max-width: 640px)', false);
