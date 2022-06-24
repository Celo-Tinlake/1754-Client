/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface MicroLoanFactoryInterface extends utils.Interface {
  functions: {
    "IDs()": FunctionFragment;
    "PERCENT_DENOMINATOR()": FunctionFragment;
    "addAttestor(address)": FunctionFragment;
    "attest(uint256,uint256,bytes)": FunctionFragment;
    "attestors(address)": FunctionFragment;
    "claimCredit(uint256)": FunctionFragment;
    "contribute(uint256,uint256)": FunctionFragment;
    "creditScores(address)": FunctionFragment;
    "creditToken()": FunctionFragment;
    "getAmountOwed(uint256)": FunctionFragment;
    "interestModule()": FunctionFragment;
    "interestRate()": FunctionFragment;
    "loans(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeAttestor(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "repayLoan(uint256,uint256)": FunctionFragment;
    "requestLoan(uint8,uint256,uint256)": FunctionFragment;
    "requestsByAddress(address)": FunctionFragment;
    "requestsById(uint256)": FunctionFragment;
    "setCreditToken(address)": FunctionFragment;
    "settlementToken()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "IDs"
      | "PERCENT_DENOMINATOR"
      | "addAttestor"
      | "attest"
      | "attestors"
      | "claimCredit"
      | "contribute"
      | "creditScores"
      | "creditToken"
      | "getAmountOwed"
      | "interestModule"
      | "interestRate"
      | "loans"
      | "owner"
      | "removeAttestor"
      | "renounceOwnership"
      | "repayLoan"
      | "requestLoan"
      | "requestsByAddress"
      | "requestsById"
      | "setCreditToken"
      | "settlementToken"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "IDs", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "PERCENT_DENOMINATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addAttestor",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "attest",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "attestors",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "claimCredit",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "contribute",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "creditScores",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "creditToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountOwed",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "interestModule",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "interestRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "loans",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeAttestor",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "repayLoan",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "requestLoan",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "requestsByAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "requestsById",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setCreditToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "settlementToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "IDs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "PERCENT_DENOMINATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addAttestor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "attest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "attestors", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimCredit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "contribute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "creditScores",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountOwed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "interestModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "interestRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "loans", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAttestor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "repayLoan", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestLoan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestsByAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestsById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCreditToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settlementToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Attestation(uint256,address,uint256,bytes)": EventFragment;
    "AttestorAdded(address)": EventFragment;
    "AttestorRemoved(address)": EventFragment;
    "LoanFulfilled(uint256,uint256,address,uint256)": EventFragment;
    "LoanFullyPaid(uint256,uint256,address,uint256,uint256,int256)": EventFragment;
    "LoanPaymentMade(uint256,uint256,address,uint256,uint256)": EventFragment;
    "LoanRequested(uint256,address,uint256,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Attestation"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AttestorAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AttestorRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LoanFulfilled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LoanFullyPaid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LoanPaymentMade"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LoanRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface AttestationEventObject {
  loanId: BigNumber;
  attestor: string;
  score: BigNumber;
  details: string;
}
export type AttestationEvent = TypedEvent<
  [BigNumber, string, BigNumber, string],
  AttestationEventObject
>;

export type AttestationEventFilter = TypedEventFilter<AttestationEvent>;

export interface AttestorAddedEventObject {
  attestor: string;
}
export type AttestorAddedEvent = TypedEvent<[string], AttestorAddedEventObject>;

export type AttestorAddedEventFilter = TypedEventFilter<AttestorAddedEvent>;

export interface AttestorRemovedEventObject {
  attestor: string;
}
export type AttestorRemovedEvent = TypedEvent<
  [string],
  AttestorRemovedEventObject
>;

export type AttestorRemovedEventFilter = TypedEventFilter<AttestorRemovedEvent>;

export interface LoanFulfilledEventObject {
  id: BigNumber;
  time: BigNumber;
  borrower: string;
  amount: BigNumber;
}
export type LoanFulfilledEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber],
  LoanFulfilledEventObject
>;

export type LoanFulfilledEventFilter = TypedEventFilter<LoanFulfilledEvent>;

export interface LoanFullyPaidEventObject {
  id: BigNumber;
  time: BigNumber;
  borrower: string;
  amountBorrowed: BigNumber;
  elapsedTime: BigNumber;
  changeToCredit: BigNumber;
}
export type LoanFullyPaidEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber, BigNumber, BigNumber],
  LoanFullyPaidEventObject
>;

export type LoanFullyPaidEventFilter = TypedEventFilter<LoanFullyPaidEvent>;

export interface LoanPaymentMadeEventObject {
  id: BigNumber;
  time: BigNumber;
  borrower: string;
  amountPaid: BigNumber;
  outstandingLoanAmount: BigNumber;
}
export type LoanPaymentMadeEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber, BigNumber],
  LoanPaymentMadeEventObject
>;

export type LoanPaymentMadeEventFilter = TypedEventFilter<LoanPaymentMadeEvent>;

export interface LoanRequestedEventObject {
  id: BigNumber;
  requestor: string;
  timestamp: BigNumber;
  amount: BigNumber;
  rate: BigNumber;
}
export type LoanRequestedEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, BigNumber],
  LoanRequestedEventObject
>;

export type LoanRequestedEventFilter = TypedEventFilter<LoanRequestedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface MicroLoanFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MicroLoanFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    IDs(overrides?: CallOverrides): Promise<[BigNumber]>;

    PERCENT_DENOMINATOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    addAttestor(
      newAttestor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    attest(
      loanId: PromiseOrValue<BigNumberish>,
      score: PromiseOrValue<BigNumberish>,
      details: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    attestors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    claimCredit(
      creditId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    contribute(
      id: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    creditScores(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    creditToken(overrides?: CallOverrides): Promise<[string]>;

    getAmountOwed(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    interestModule(overrides?: CallOverrides): Promise<[string]>;

    interestRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    loans(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        number,
        boolean,
        BigNumber
      ] & {
        start: BigNumber;
        deadline: BigNumber;
        id: BigNumber;
        borrower: string;
        totalPaid: BigNumber;
        purpose: number;
        closed: boolean;
        amount: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeAttestor(
      toRemove: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    repayLoan(
      id: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    requestLoan(
      purpose: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    requestsByAddress(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    requestsById(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, BigNumber, number] & {
        amount: BigNumber;
        amountFilled: BigNumber;
        borrower: string;
        duration: BigNumber;
        purpose: number;
      }
    >;

    setCreditToken(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    settlementToken(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  IDs(overrides?: CallOverrides): Promise<BigNumber>;

  PERCENT_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;

  addAttestor(
    newAttestor: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  attest(
    loanId: PromiseOrValue<BigNumberish>,
    score: PromiseOrValue<BigNumberish>,
    details: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  attestors(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  claimCredit(
    creditId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  contribute(
    id: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  creditScores(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  creditToken(overrides?: CallOverrides): Promise<string>;

  getAmountOwed(
    id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  interestModule(overrides?: CallOverrides): Promise<string>;

  interestRate(overrides?: CallOverrides): Promise<BigNumber>;

  loans(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      BigNumber,
      number,
      boolean,
      BigNumber
    ] & {
      start: BigNumber;
      deadline: BigNumber;
      id: BigNumber;
      borrower: string;
      totalPaid: BigNumber;
      purpose: number;
      closed: boolean;
      amount: BigNumber;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  removeAttestor(
    toRemove: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  repayLoan(
    id: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  requestLoan(
    purpose: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    duration: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  requestsByAddress(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  requestsById(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string, BigNumber, number] & {
      amount: BigNumber;
      amountFilled: BigNumber;
      borrower: string;
      duration: BigNumber;
      purpose: number;
    }
  >;

  setCreditToken(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  settlementToken(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    IDs(overrides?: CallOverrides): Promise<BigNumber>;

    PERCENT_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;

    addAttestor(
      newAttestor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    attest(
      loanId: PromiseOrValue<BigNumberish>,
      score: PromiseOrValue<BigNumberish>,
      details: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    attestors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    claimCredit(
      creditId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    contribute(
      id: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    creditScores(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    creditToken(overrides?: CallOverrides): Promise<string>;

    getAmountOwed(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    interestModule(overrides?: CallOverrides): Promise<string>;

    interestRate(overrides?: CallOverrides): Promise<BigNumber>;

    loans(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        number,
        boolean,
        BigNumber
      ] & {
        start: BigNumber;
        deadline: BigNumber;
        id: BigNumber;
        borrower: string;
        totalPaid: BigNumber;
        purpose: number;
        closed: boolean;
        amount: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    removeAttestor(
      toRemove: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    repayLoan(
      id: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    requestLoan(
      purpose: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    requestsByAddress(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    requestsById(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, BigNumber, number] & {
        amount: BigNumber;
        amountFilled: BigNumber;
        borrower: string;
        duration: BigNumber;
        purpose: number;
      }
    >;

    setCreditToken(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    settlementToken(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Attestation(uint256,address,uint256,bytes)"(
      loanId?: PromiseOrValue<BigNumberish> | null,
      attestor?: PromiseOrValue<string> | null,
      score?: PromiseOrValue<BigNumberish> | null,
      details?: null
    ): AttestationEventFilter;
    Attestation(
      loanId?: PromiseOrValue<BigNumberish> | null,
      attestor?: PromiseOrValue<string> | null,
      score?: PromiseOrValue<BigNumberish> | null,
      details?: null
    ): AttestationEventFilter;

    "AttestorAdded(address)"(
      attestor?: PromiseOrValue<string> | null
    ): AttestorAddedEventFilter;
    AttestorAdded(
      attestor?: PromiseOrValue<string> | null
    ): AttestorAddedEventFilter;

    "AttestorRemoved(address)"(
      attestor?: PromiseOrValue<string> | null
    ): AttestorRemovedEventFilter;
    AttestorRemoved(
      attestor?: PromiseOrValue<string> | null
    ): AttestorRemovedEventFilter;

    "LoanFulfilled(uint256,uint256,address,uint256)"(
      id?: PromiseOrValue<BigNumberish> | null,
      time?: null,
      borrower?: PromiseOrValue<string> | null,
      amount?: null
    ): LoanFulfilledEventFilter;
    LoanFulfilled(
      id?: PromiseOrValue<BigNumberish> | null,
      time?: null,
      borrower?: PromiseOrValue<string> | null,
      amount?: null
    ): LoanFulfilledEventFilter;

    "LoanFullyPaid(uint256,uint256,address,uint256,uint256,int256)"(
      id?: PromiseOrValue<BigNumberish> | null,
      time?: null,
      borrower?: PromiseOrValue<string> | null,
      amountBorrowed?: null,
      elapsedTime?: null,
      changeToCredit?: null
    ): LoanFullyPaidEventFilter;
    LoanFullyPaid(
      id?: PromiseOrValue<BigNumberish> | null,
      time?: null,
      borrower?: PromiseOrValue<string> | null,
      amountBorrowed?: null,
      elapsedTime?: null,
      changeToCredit?: null
    ): LoanFullyPaidEventFilter;

    "LoanPaymentMade(uint256,uint256,address,uint256,uint256)"(
      id?: PromiseOrValue<BigNumberish> | null,
      time?: null,
      borrower?: PromiseOrValue<string> | null,
      amountPaid?: PromiseOrValue<BigNumberish> | null,
      outstandingLoanAmount?: null
    ): LoanPaymentMadeEventFilter;
    LoanPaymentMade(
      id?: PromiseOrValue<BigNumberish> | null,
      time?: null,
      borrower?: PromiseOrValue<string> | null,
      amountPaid?: PromiseOrValue<BigNumberish> | null,
      outstandingLoanAmount?: null
    ): LoanPaymentMadeEventFilter;

    "LoanRequested(uint256,address,uint256,uint256,uint256)"(
      id?: PromiseOrValue<BigNumberish> | null,
      requestor?: PromiseOrValue<string> | null,
      timestamp?: null,
      amount?: null,
      rate?: null
    ): LoanRequestedEventFilter;
    LoanRequested(
      id?: PromiseOrValue<BigNumberish> | null,
      requestor?: PromiseOrValue<string> | null,
      timestamp?: null,
      amount?: null,
      rate?: null
    ): LoanRequestedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    IDs(overrides?: CallOverrides): Promise<BigNumber>;

    PERCENT_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;

    addAttestor(
      newAttestor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    attest(
      loanId: PromiseOrValue<BigNumberish>,
      score: PromiseOrValue<BigNumberish>,
      details: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    attestors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimCredit(
      creditId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    contribute(
      id: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    creditScores(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    creditToken(overrides?: CallOverrides): Promise<BigNumber>;

    getAmountOwed(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    interestModule(overrides?: CallOverrides): Promise<BigNumber>;

    interestRate(overrides?: CallOverrides): Promise<BigNumber>;

    loans(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeAttestor(
      toRemove: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    repayLoan(
      id: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    requestLoan(
      purpose: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    requestsByAddress(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    requestsById(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setCreditToken(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    settlementToken(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    IDs(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PERCENT_DENOMINATOR(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addAttestor(
      newAttestor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    attest(
      loanId: PromiseOrValue<BigNumberish>,
      score: PromiseOrValue<BigNumberish>,
      details: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    attestors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimCredit(
      creditId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    contribute(
      id: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    creditScores(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    creditToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAmountOwed(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    interestModule(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    interestRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    loans(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeAttestor(
      toRemove: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    repayLoan(
      id: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    requestLoan(
      purpose: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    requestsByAddress(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    requestsById(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setCreditToken(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    settlementToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
