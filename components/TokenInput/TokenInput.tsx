import {
  Card,
  Center,
  Container,
  Group,
  Image,
  Input,
  NumberInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { Token } from '@ubeswap/sdk';
import clsx from 'clsx';
import { useMemo } from 'react';
import { CUSD } from '../../constants/addresses';
import { useTokenBalance } from '../../hooks/useTokenBalance';
import { useWeb3Context } from '../../hooks/web3';
import useStyles from './TokenInput.styles';

interface TokenInputProps {
  tokenAddress: string;
  onChange?: (val?: string) => void;
  label?: string;
  value?: string;
  disabled?: boolean;
}

const getTokenIconUrl = (address: string) =>
  address.toLowerCase() === CUSD.toLowerCase()
    ? 'https://raw.githubusercontent.com/Node-Fi/default-tokenAddress-list/master/assets/asset_cUSD.png'
    : 'https://raw.githubusercontent.com/Node-Fi/default-tokenAddress-list/master/assets/asset_FACT.png';

const getTokenSymbol = (address: string) =>
  address.toLowerCase() === CUSD.toLowerCase() ? 'cUSD' : 'FACT';

export default function TokenInput({
  tokenAddress,
  onChange,
  label,
  value,
  disabled,
}: TokenInputProps) {
  const { classes } = useStyles();
  const { chainID, address } = useWeb3Context();
  const token = useMemo(
    () => new Token(chainID, tokenAddress, 18, getTokenSymbol(tokenAddress)),
    [chainID, tokenAddress]
  );

  const balance = useTokenBalance(token, address);
  return (
    <div>
      <Group className={classes.container} mt={15}>
        <div className={classes.item}>
          <Text size="lg" weight={400}>
            {label ?? 'Input an amount'}
          </Text>
          <TextInput
            className={classes.textInputStyle}
            variant="unstyled"
            styles={{
              input: { fontSize: 30, lineHeight: 1000, maxWidth: 200 },
              root: { padding: 0, width: '60%' },
            }}
            placeholder="0.00"
            value={value}
            onChange={(e) => {
              if (e.target.value.match(/^[0-9]*.[0-9]*$/) && onChange) {
                onChange(e.target.value);
              } else if (e.target.value.length === 0 && onChange) {
                onChange(undefined);
              }
            }}
            height={80}
          />
        </div>
        <Group position="center" spacing={5} className={clsx(classes.leftBorder, classes.item)}>
          <Image width={50} height={50} radius="xl" src={getTokenIconUrl(tokenAddress)} />
          {getTokenSymbol(tokenAddress)}
        </Group>
      </Group>
      {balance && balance.greaterThan('0') && (
        <Text color="dimmed" size="md" ml={'1rem'}>{`Balance: ${balance.toFixed(2)}`}</Text>
      )}
    </div>
  );
}
