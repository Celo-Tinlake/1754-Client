/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  GaugeController,
  GaugeControllerInterface,
} from "../GaugeController";

const _abi = [
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
        indexed: false,
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        name: "type_id",
        type: "int128",
      },
    ],
    name: "AddType",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "type_id",
        type: "int128",
      },
      {
        indexed: false,
        name: "time",
        type: "uint256",
      },
      {
        indexed: false,
        name: "weight",
        type: "uint256",
      },
      {
        indexed: false,
        name: "total_weight",
        type: "uint256",
      },
    ],
    name: "NewTypeWeight",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "gauge_address",
        type: "address",
      },
      {
        indexed: false,
        name: "time",
        type: "uint256",
      },
      {
        indexed: false,
        name: "weight",
        type: "uint256",
      },
      {
        indexed: false,
        name: "total_weight",
        type: "uint256",
      },
    ],
    name: "NewGaugeWeight",
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
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        name: "gauge_addr",
        type: "address",
      },
      {
        indexed: false,
        name: "weight",
        type: "uint256",
      },
    ],
    name: "VoteForGauge",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "addr",
        type: "address",
      },
      {
        indexed: false,
        name: "gauge_type",
        type: "int128",
      },
      {
        indexed: false,
        name: "weight",
        type: "uint256",
      },
    ],
    name: "NewGauge",
    type: "event",
  },
  {
    inputs: [
      {
        name: "_token",
        type: "address",
      },
      {
        name: "_voting_escrow",
        type: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    gas: 37568,
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
    gas: 38407,
    inputs: [],
    name: "apply_transfer_ownership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 1687,
    inputs: [
      {
        name: "_addr",
        type: "address",
      },
    ],
    name: "gauge_types",
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
    inputs: [
      {
        name: "addr",
        type: "address",
      },
      {
        name: "gauge_type",
        type: "int128",
      },
    ],
    name: "add_gauge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "addr",
        type: "address",
      },
      {
        name: "gauge_type",
        type: "int128",
      },
      {
        name: "weight",
        type: "uint256",
      },
    ],
    name: "add_gauge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 18033775892,
    inputs: [],
    name: "checkpoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 18087670272,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    name: "checkpoint_gauge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    name: "gauge_relative_weight",
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
    inputs: [
      {
        name: "addr",
        type: "address",
      },
      {
        name: "time",
        type: "uint256",
      },
    ],
    name: "gauge_relative_weight",
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
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    name: "gauge_relative_weight_write",
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
    inputs: [
      {
        name: "addr",
        type: "address",
      },
      {
        name: "time",
        type: "uint256",
      },
    ],
    name: "gauge_relative_weight_write",
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
    inputs: [
      {
        name: "_name",
        type: "string",
      },
    ],
    name: "add_type",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_name",
        type: "string",
      },
      {
        name: "weight",
        type: "uint256",
      },
    ],
    name: "add_type",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 36246292943,
    inputs: [
      {
        name: "type_id",
        type: "int128",
      },
      {
        name: "weight",
        type: "uint256",
      },
    ],
    name: "change_type_weight",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 36354153634,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
      {
        name: "weight",
        type: "uint256",
      },
    ],
    name: "change_gauge_weight",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 18142043388,
    inputs: [
      {
        name: "_gauge_addr",
        type: "address",
      },
      {
        name: "_user_weight",
        type: "uint256",
      },
    ],
    name: "vote_for_gauge_weights",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    gas: 2945,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    name: "get_gauge_weight",
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
    gas: 2978,
    inputs: [
      {
        name: "type_id",
        type: "int128",
      },
    ],
    name: "get_type_weight",
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
    gas: 2603,
    inputs: [],
    name: "get_total_weight",
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
    gas: 3110,
    inputs: [
      {
        name: "type_id",
        type: "int128",
      },
    ],
    name: "get_weights_sum_per_type",
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
    gas: 1751,
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
    gas: 1781,
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
    gas: 1811,
    inputs: [],
    name: "token",
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
    gas: 1841,
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
    gas: 1871,
    inputs: [],
    name: "n_gauge_types",
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
    gas: 1901,
    inputs: [],
    name: "n_gauges",
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
    gas: 8629,
    inputs: [
      {
        name: "arg0",
        type: "int128",
      },
    ],
    name: "gauge_type_names",
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
    gas: 2070,
    inputs: [
      {
        name: "arg0",
        type: "uint256",
      },
    ],
    name: "gauges",
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
    gas: 4637,
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
    name: "vote_user_slopes",
    outputs: [
      {
        name: "slope",
        type: "uint256",
      },
      {
        name: "power",
        type: "uint256",
      },
      {
        name: "end",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 2236,
    inputs: [
      {
        name: "arg0",
        type: "address",
      },
    ],
    name: "vote_user_power",
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
    gas: 2481,
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
    name: "last_user_vote",
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
    gas: 3645,
    inputs: [
      {
        name: "arg0",
        type: "address",
      },
      {
        name: "arg1",
        type: "uint256",
      },
    ],
    name: "points_weight",
    outputs: [
      {
        name: "bias",
        type: "uint256",
      },
      {
        name: "slope",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 2326,
    inputs: [
      {
        name: "arg0",
        type: "address",
      },
    ],
    name: "time_weight",
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
    gas: 3786,
    inputs: [
      {
        name: "arg0",
        type: "int128",
      },
      {
        name: "arg1",
        type: "uint256",
      },
    ],
    name: "points_sum",
    outputs: [
      {
        name: "bias",
        type: "uint256",
      },
      {
        name: "slope",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    gas: 2280,
    inputs: [
      {
        name: "arg0",
        type: "uint256",
      },
    ],
    name: "time_sum",
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
    gas: 2316,
    inputs: [
      {
        name: "arg0",
        type: "uint256",
      },
    ],
    name: "points_total",
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
    gas: 2231,
    inputs: [],
    name: "time_total",
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
    gas: 2672,
    inputs: [
      {
        name: "arg0",
        type: "int128",
      },
      {
        name: "arg1",
        type: "uint256",
      },
    ],
    name: "points_type_weight",
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
    gas: 2400,
    inputs: [
      {
        name: "arg0",
        type: "uint256",
      },
    ],
    name: "time_type_weight",
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

export class GaugeController__factory {
  static readonly abi = _abi;
  static createInterface(): GaugeControllerInterface {
    return new utils.Interface(_abi) as GaugeControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GaugeController {
    return new Contract(address, _abi, signerOrProvider) as GaugeController;
  }
}
