import { Stack, Table, Text, useMantineTheme } from '@mantine/core';
import { useMemo } from 'react';
import { dumbyPortfolioBooks } from '../../../constants/dumbyData';

export default function PortfolioBook() {
  const theme = useMantineTheme();
  const rows = useMemo(
    () =>
      dumbyPortfolioBooks.map((el, i) => (
        <tr key={`table-${i}`}>
          {Object.values(el).map((e, k) => (
            <td key={`key-${i}-${k}`} style={{ color: theme.colors.blue[8], fontWeight: 500 }}>
              {e}
            </td>
          ))}
        </tr>
      )),
    []
  );

  return (
    <Stack mt={75}>
      <Text size="xl" weight={700} color="blue">
        Portfolio Book
      </Text>
      <Table
        highlightOnHover
        style={{
          border: '1px solid',
          borderRadius: 20,
          borderCollapse: 'separate',
        }}
        fontSize="lg"
      >
        <thead style={{ height: 70 }}>
          <tr>
            <th>Address</th>
            <th>Loan Size</th>
            <th>Amount Repaid</th>
            <th>Duration</th>
            <th>APR</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Stack>
  );
}
