import { Progress } from '@mantine/core';
import { shortenAddress } from '../utils';

export const dumbyPortfolioBooks = [
  {
    address: shortenAddress('0x6c0d6Fba3bcdb224278474E8d524F19c6BB55850'),
    size: 'R$10.00',
    repaid: <Progress color="blue" label="" value={0} size="xl" />,
    duration: '57 Days',
    apr: '10%',
  },
  {
    address: shortenAddress('0x25E9C21973125edAe21493e967060EC34eEe8CE9'),
    size: 'R$10.00',
    repaid: <Progress color="blue" label="15%" value={15} size="xl" />,
    duration: '35 Days',
    apr: '10%',
  },
  {
    address: shortenAddress('0xCD943EE26221AC3e6e7f3e38598F2b08BAEA87DD'),
    size: 'R$30.00',
    repaid: <Progress color="blue" label="23%" value={23} size="xl" />,
    duration: '20 Days',
    apr: '15%',
  },
  {
    address: shortenAddress('0x87290D9185AfE74B11B228A3E18092c6A3970A37'),
    size: 'R$34.00',
    repaid: <Progress color="blue" label="50%" value={50} size="xl" />,
    duration: '50 Days',
    apr: '17%',
  },
  {
    address: shortenAddress('0xA954B37c3c8C0254701a796fC9A150A1063B8ef4'),
    size: 'R$100.00',
    repaid: <Progress color="blue" label="10%" value={10} size="xl" />,
    duration: '30 Days',
    apr: '30%',
  },
  {
    address: shortenAddress('0xd0b64c57c4d5ad7a404b057b160e41bfa853dbac'),
    size: 'R$200.00',
    repaid: <Progress color="blue" label="80%" value={80} size="xl" />,
    duration: '30 Days',
    apr: '20%',
  },
];
