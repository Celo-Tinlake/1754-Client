import {
  Card,
  Center,
  Container,
  Group,
  Input,
  NumberInput,
  Stack,
  Image,
  Text,
  TextInput,
} from '@mantine/core';
import { Token } from '@ubeswap/sdk';
import clsx from 'clsx';
import { useCallback, useMemo } from 'react';
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
    ? 'https://raw.githubusercontent.com/Node-Fi/default-token-list/master/assets/asset_cUSD.png'
    : 'https://raw.githubusercontent.com/Node-Fi/default-token-list/master/assets/asset_FACT.png';

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

  const Right = useCallback(
    () => (
      <Group position="center" spacing={5} className={clsx(classes.rightItem)}>
        <Image width={50} height={50} radius="xl" src={getTokenIconUrl(tokenAddress)} />
        <Text>{getTokenSymbol(tokenAddress)}</Text>
      </Group>
    ),
    []
  );

  // const balance = useTokenBalance(token, address);
  return (
    <TextInput
      label={label ?? 'Input an amount'}
      className={clsx(classes.textInputStyle, classes.container)}
      variant="unstyled"
      styles={{
        label: { padding: 0 },
        input: { fontSize: 30, lineHeight: 1000, maxWidth: 200, cursor: disabled && 'not-allowed' },
        root: { padding: 0, width: '60%', margin: 0 },
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
      rightSection={<Right />}
      rightSectionWidth="50%"
    />
  );
}