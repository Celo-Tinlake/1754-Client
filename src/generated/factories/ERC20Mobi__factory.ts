/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ERC20Mobi, ERC20MobiInterface } from "../ERC20Mobi";

const _abi = [
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "time",
        type: "uint256",
      },
      {
        indexed: false,
        name: "rate",
        type: "uint256",
      },
      {
        indexed: false,
        name: "supply",
        type: "uint256",
      },
    ],
    name: "UpdateMiningParameters",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "minter",
        type: "address",
      },
    ],
    name: "SetMinter",
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
    name: "SetAdmin",
    type: "event",
  },
  {
    inputs: [
      {
        name: "_name",
        type: "string",
      },
      {
        name: "_symbol",
        type: "string",
      },
      {
        name: "_decimals",
        type: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    gas: 148730,
    inputs: [],
    name: "update_mining_parameters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 149582,
    inputs: [],
    name: "start_epoch_time_write",
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
    gas: 149785,
    inputs: [],
    name: "future_epoch_time_write",
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
    gas: 3928,
    inputs: [],
    name: "available_supply",
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
    gas: 2197051,
    inputs: [
      {
        name: "start",
        type: "uint256",
      },
      {
        name: "end",
        type: "uint256",
      },
    ],
    name: "mintable_in_timeframe",
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
    gas: 38669,
    inputs: [
      {
        name: "_minter",
        type: "address",
      },
    ],
    name: "set_minter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 37808,
    inputs: [
      {
        name: "_admin",
        type: "address",
      },
    ],
    name: "set_admin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 1331,
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
    gas: 1791,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
      {
        name: "_spender",
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
    gas: 75110,
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
    gas: 111465,
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
    gas: 39259,
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
    gas: 228067,
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
    name: "mint",
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
    gas: 74909,
    inputs: [
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "burn",
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
    gas: 178147,
    inputs: [
      {
        name: "_name",
        type: "string",
      },
      {
        name: "_symbol",
        type: "string",
      },
    ],
    name: "set_name",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 7973,
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
    gas: 7026,
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
    gas: 1631,
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
    gas: 1876,
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
    gas: 1691,
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
    gas: 1721,
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
    gas: 1751,
    inputs: [],
    name: "mining_epoch",
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
    gas: 1781,
    inputs: [],
    name: "start_epoch_time",
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
    gas: 1811,
    inputs: [],
    name: "rate",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ERC20Mobi__factory {
  static readonly abi = _abi;
  static createInterface(): ERC20MobiInterface {
    return new utils.Interface(_abi) as ERC20MobiInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Mobi {
    return new Contract(address, _abi, signerOrProvider) as ERC20Mobi;
  }
}
