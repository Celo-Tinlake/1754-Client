import { showNotification, updateNotification } from '@mantine/notifications';
import { Loader } from '@mantine/core';
import { ContractTransaction } from 'ethers';
import { Check } from 'tabler-icons-react';

interface TransactionDescription {
  id: string;
  title: string;
  callback: () => Promise<ContractTransaction>;
}

export async function executeTransaction({ callback, ...details }: TransactionDescription) {
  showNotification({
    ...details,
    loading: true,
    message: 'Approve the transaction in your wallet',
    disallowClose: true,
    autoClose: false,
    icon: <Loader />,
    // position: 'bottom-left',
  });
  const res = await callback();
  updateNotification({
    id: details.id,
    loading: true,
    message: 'Waiting for confirmations',
    disallowClose: true,
    autoClose: false,
    // position: 'bottom-left',
  });
  await res.wait();
  updateNotification({
    id: details.id,
    message: 'Confirmed!',
    disallowClose: false,
    icon: <Check />,
    autoClose: true,
    loading: false,
    // position: 'bottom-left',
    onClick: () => window.open(`https://alfajores.celoscan.xyz/tx/${res.hash}`, '_blank'),
  });
  return res;
}
