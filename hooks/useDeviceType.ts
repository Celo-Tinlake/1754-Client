import { useMediaQuery } from '@mantine/hooks';

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
  const isMobilePortrait = useMediaQuery('(min-width: 320px)', false);
  const isMobileLandscape = useMediaQuery('(min-width: 577px)', false);
  const isTabletPortrait = useMediaQuery('(min-width: 641px)', false);
  const isTabletLandscape = useMediaQuery('(min-width: 961px)', false);
  const isDesktop = useMediaQuery('(min-width: 1025px)', false);
  const i = [
    isMobilePortrait,
    isMobileLandscape,
    isTabletPortrait,
    isTabletLandscape,
    isDesktop,
  ].filter((el) => el).length;
  return breakpoints[Math.max(0, i - 1)].device;
}

export const useIsMobile = () => useMediaQuery('(max-width: 640px)', false);
