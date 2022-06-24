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

export const dumbyImage = '/assets/Logo.jpeg';

export const dumbyPools: { [t in PoolType]: PoolRowProps[] } = {
  Senior: [
    {
      address: '0xFCa5Bb3732185AE6AaFC65aD8C9A4fBFf21DbaaD',
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
      address: '0xFCa5Bb3732185AE6AaFC65aD8C9A4fBFf21DbaaD',
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
      address: '0xFCa5Bb3732185AE6AaFC65aD8C9A4fBFf21DbaaD',
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
      address: '0x3489745eff9525CCC3d8c648102FE2cf3485e228',
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
      address: '0x3489745eff9525CCC3d8c648102FE2cf3485e228',
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
      address: '0x3489745eff9525CCC3d8c648102FE2cf3485e228',
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
      address: '0x3489745eff9525CCC3d8c648102FE2cf3485e228',
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
