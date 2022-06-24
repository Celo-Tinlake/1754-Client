export type PoolType = 'Senior' | 'Junior';

export type CustomerType = 'Enterprise' | 'Consumer' | 'All';

export interface PoolRowProps {
  address: string;
  poolId: string;
  imageUrl: string;
  customerType: CustomerType;
  title: string;
  caption: string;
  status: 'Open' | 'Repaid' | 'Full';
  poolSize: string;
  apy: number;
  denomination: string;
  company: string;
  type: PoolType;
}

export const dumbyImage = 'https://avatars.githubusercontent.com/u/106453086?s=200&v=4';

export const dumbyPools: { [t in PoolType]: PoolRowProps[] } = {
  Senior: [
    {
      address: '0x4653251486a57f90Ee89F9f34E098b9218659b83',
      poolId: 'LAF',
      imageUrl: dumbyImage,
      customerType: 'Enterprise',
      title: 'Latin America Fund',
      caption: 'Diversified Portfolio',
      status: 'Open',
      poolSize: '10,000,000',
      apy: 0.089,
      denomination: 'cUSD',
      company: '1754 Factory',
      type: 'Senior',
    },
    {
      address: '0x4653251486a57f90Ee89F9f34E098b9218659b83',
      poolId: 'LAF',
      imageUrl: dumbyImage,
      customerType: 'Consumer',
      title: 'Personal Loan Fund',
      caption: 'Diversified Portfolio',
      status: 'Open',
      poolSize: '200,000',
      apy: 0.134,
      denomination: 'cUSD',
      company: '1754 Factory',
      type: 'Senior',
    },
    {
      address: '0x4653251486a57f90Ee89F9f34E098b9218659b83',
      poolId: 'LAF',
      imageUrl: dumbyImage,
      customerType: 'Consumer',
      title: 'Cash Advance Fund',
      caption: 'Diversified Portfolio',
      status: 'Open',
      poolSize: '100,000',
      apy: 0.142,
      denomination: 'cUSD',
      company: '1754 Factory',
      type: 'Senior',
    },
  ],
  Junior: [
    {
      address: '0x72662E4da74278430123cE51405c1e7A1B87C294',
      poolId: 'AIE',
      imageUrl: dumbyImage,
      customerType: 'Enterprise',
      title: 'Cauris Africa Innovaion & Enterprise',
      caption: 'Fintech Debt Financing',
      status: 'Open',
      poolSize: '1,000,000',
      apy: 0.149,
      denomination: 'cUSD',
      company: 'Cauris',
      type: 'Junior',
    },
    {
      address: '0x72662E4da74278430123cE51405c1e7A1B87C294',
      poolId: 'AIE',
      imageUrl: dumbyImage,
      customerType: 'Enterprise',
      title: 'Branch Series 3 (1754 Factory)',
      caption: 'Emerging Market Consumer Loans',
      status: 'Open',
      poolSize: '5,000,000',
      apy: 0.132,
      denomination: 'cUSD',
      company: 'Cauris',
      type: 'Junior',
    },
    {
      address: '0x72662E4da74278430123cE51405c1e7A1B87C294',
      poolId: 'AIE',
      imageUrl: dumbyImage,
      customerType: 'Enterprise',
      title: 'Roda Columbia Motorbike Fund',
      caption: 'Emerging Market Consumer Loans',
      status: 'Full',
      poolSize: '100,000',
      apy: 0.118,
      denomination: 'cUSD',
      company: 'Cauris',
      type: 'Junior',
    },
    {
      address: '0x72662E4da74278430123cE51405c1e7A1B87C294',
      poolId: 'AIE',
      imageUrl: dumbyImage,
      customerType: 'Enterprise',
      title: 'Bling Series 1 (1754 Factory)',
      caption: 'Payment Advances',
      status: 'Repaid',
      poolSize: '300,000',
      apy: 0.139,
      denomination: 'cUSD',
      company: 'Cauris',
      type: 'Junior',
    },
  ],
};

export const getPool = (id: string) =>
  [...dumbyPools.Senior, ...dumbyPools.Junior].find(({ poolId }) => poolId === id);
