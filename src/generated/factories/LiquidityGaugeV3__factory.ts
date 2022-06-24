/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  LiquidityGaugeV3,
  LiquidityGaugeV3Interface,
} from "../LiquidityGaugeV3";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        name: "original_balance",
        type: "uint256",
      },
      {
        indexed: false,
        name: "original_supply",
        type: "uint256",
      },
      {
        indexed: false,
        name: "working_balance",
        type: "uint256",
      },
      {
        indexed: false,
        name: "working_supply",
        type: "uint256",
      },
    ],
    name: "UpdateLiquidityLimit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "admin",
        type: "address",
      },
    ],
    name: "CommitOwnership",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "admin",
        type: "address",
      },
    ],
    name: "ApplyOwnership",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        name: "_spender",
        type: "address",
      },
      {
        indexed: false,
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    inputs: [
      {
        name: "_lp_token",
        type: "address",
      },
      {
        name: "_minter",
        type: "address",
      },
      {
        name: "_admin",
        type: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    gas: 288,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 2024,
    inputs: [],
    name: "integrate_checkpoint",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 2401338,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    name: "user_checkpoint",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 2321005,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    name: "claimable_tokens",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 1418,
    inputs: [],
    name: "reward_contract",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 1244,
    inputs: [],
    name: "last_claim",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 1766,
    inputs: [
      {
        name: "_addr",
        type: "address",
      },
      {
        name: "_token",
        type: "address",
      },
    ],
    name: "claimed_reward",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 1734,
    inputs: [
      {
        name: "_addr",
        type: "address",
      },
      {
        name: "_token",
        type: "address",
      },
    ],
    name: "claimable_reward",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 1078618,
    inputs: [
      {
        name: "_addr",
        type: "address",
      },
      {
        name: "_token",
        type: "address",
      },
    ],
    name: "claimable_reward_write",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 35733,
    inputs: [
      {
        name: "_receiver",
        type: "address",
      },
    ],
    name: "set_rewards_receiver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claim_rewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_addr",
        type: "address",
      },
    ],
    name: "claim_rewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_addr",
        type: "address",
      },
      {
        name: "_receiver",
        type: "address",
      },
    ],
    name: "claim_rewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 2407829,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    name: "kick",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_value",
        type: "uint256",
      },
      {
        name: "_addr",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_value",
        type: "uint256",
      },
      {
        name: "_addr",
        type: "address",
      },
      {
        name: "_claim_rewards",
        type: "bool",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_value",
        type: "uint256",
      },
      {
        name: "_claim_rewards",
        type: "bool",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 13743416,
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 13780066,
    inputs: [
      {
        name: "_from",
        type: "address",
      },
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 38211,
    inputs: [
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 39455,
    inputs: [
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_added_value",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 39479,
    inputs: [
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_subtracted_value",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 2441191,
    inputs: [
      {
        name: "_reward_contract",
        type: "address",
      },
      {
        name: "_sigs",
        type: "bytes32",
      },
      {
        name: "_reward_tokens",
        type: "address[8]",
      },
    ],
    name: "set_rewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 36845,
    inputs: [
      {
        name: "_is_killed",
        type: "bool",
      },
    ],
    name: "set_killed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 38225,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    name: "commit_transfer_ownership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 38170,
    inputs: [],
    name: "accept_transfer_ownership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 1778,
    inputs: [],
    name: "minter",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 1808,
    inputs: [],
    name: "crv_token",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 1838,
    inputs: [],
    name: "lp_token",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 1868,
    inputs: [],
    name: "controller",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 1898,
    inputs: [],
    name: "voting_escrow",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 1928,
    inputs: [],
    name: "future_epoch_time",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 2173,
    inputs: [
      {
        name: "arg0",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 1988,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 2448,
    inputs: [
      {
        name: "arg0",
        type: "address",
      },
      {
        name: "arg1",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 8450,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 7503,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 2323,
    inputs: [
      {
        name: "arg0",
        type: "address",
      },
    ],
    name: "working_balances",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 2138,
    inputs: [],
    name: "working_supply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 2168,
    inputs: [],
    name: "period",
    outputs: [
      {
        name: "",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 2307,
    inputs: [
      {
        name: "arg0",
        type: "uint256",
      },
    ],
    name: "period_timestamp",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 2337,
    inputs: [
      {
        name: "arg0",
        type: "uint256",
      },
    ],
    name: "integrate_inv_supply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 2473,
    inputs: [
      {
        name: "arg0",
        type: "address",
      },
    ],
    name: "integrate_inv_supply_of",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 2503,
    inputs: [
      {
        name: "arg0",
        type: "address",
      },
    ],
    name: "integrate_checkpoint_of",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 2533,
    inputs: [
      {
        name: "arg0",
        type: "address",
      },
    ],
    name: "integrate_fraction",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 2348,
    inputs: [],
    name: "inflation_rate",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 2487,
    inputs: [
      {
        name: "arg0",
        type: "uint256",
      },
    ],
    name: "reward_tokens",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 2623,
    inputs: [
      {
        name: "arg0",
        type: "address",
      },
    ],
    name: "rewards_receiver",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 2653,
    inputs: [
      {
        name: "arg0",
        type: "address",
      },
    ],
    name: "reward_integral",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 2898,
    inputs: [
      {
        name: "arg0",
        type: "address",
      },
      {
        name: "arg1",
        type: "address",
      },
    ],
    name: "reward_integral_for",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 2498,
    inputs: [],
    name: "admin",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 2528,
    inputs: [],
    name: "future_admin",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 2558,
    inputs: [],
    name: "is_killed",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class LiquidityGaugeV3__factory {
  static readonly abi = _abi;
  static createInterface(): LiquidityGaugeV3Interface {
    return new utils.Interface(_abi) as LiquidityGaugeV3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LiquidityGaugeV3 {
    return new Contract(address, _abi, signerOrProvider) as LiquidityGaugeV3;
  }
}
