import { useQuery, UseQueryResult } from 'react-query';
import invariant from 'tiny-invariant';
import { useFundManagerContract } from './useContract';

export interface FundManagerInfo {
  delegator: string;
  juniorTrancheToken: string;
  seniorTrancheToken: string;
  riskThreshold: number;
  totalDeposits: string;
}

export function useFundManager(address: string): UseQueryResult<FundManagerInfo> {
  const fundContract = useFundManagerContract(address);
  // invariant(fundContract);
  return useQuery(address, async () => {
    if (!fundContract) return undefined;
    const [delegator, juniorTrancheToken, seniorTrancheToken, riskThreshold, totalDeposits] =
      await Promise.all([
        fundContract.delegator(),
        fundContract.junior(),
        fundContract.senior(),
        fundContract.riskThreshold(),
        fundContract.totalDeposited(),
      ]);
    return {
      delegator: delegator.toString(),
      juniorTrancheToken: juniorTrancheToken.toString(),
      seniorTrancheToken: seniorTrancheToken.toString(),
      riskThreshold: parseInt(riskThreshold.toString(), 10),
      totalDeposits: totalDeposits.toString(),
    };
  });
}
