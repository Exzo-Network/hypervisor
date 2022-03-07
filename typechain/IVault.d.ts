/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IVaultInterface extends ethers.utils.Interface {
  functions: {
    "deposit(uint256,uint256,address,address)": FunctionFragment;
    "getTotalAmounts()": FunctionFragment;
    "rebalance(int24,int24,int24,int24,address,int256,int256,uint160)": FunctionFragment;
    "withdraw(uint256,address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalAmounts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rebalance",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, string, string]
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTotalAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rebalance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Deposit(address,address,uint256,uint256,uint256)": EventFragment;
    "Rebalance(int24,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "Withdraw(address,address,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Rebalance"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type DepositEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber] & {
    sender: string;
    to: string;
    shares: BigNumber;
    amount0: BigNumber;
    amount1: BigNumber;
  }
>;

export type RebalanceEvent = TypedEvent<
  [number, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
    tick: number;
    totalAmount0: BigNumber;
    totalAmount1: BigNumber;
    feeAmount0: BigNumber;
    feeAmount1: BigNumber;
    totalSupply: BigNumber;
  }
>;

export type WithdrawEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber] & {
    sender: string;
    to: string;
    shares: BigNumber;
    amount0: BigNumber;
    amount1: BigNumber;
  }
>;

export class IVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IVaultInterface;

  functions: {
    deposit(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: string,
      arg3: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getTotalAmounts(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    rebalance(
      _baseLower: BigNumberish,
      _baseUpper: BigNumberish,
      _limitLower: BigNumberish,
      _limitUpper: BigNumberish,
      feeRecipient: string,
      swapQuantity: BigNumberish,
      amountMin: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      arg0: BigNumberish,
      arg1: string,
      arg2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  deposit(
    arg0: BigNumberish,
    arg1: BigNumberish,
    arg2: string,
    arg3: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getTotalAmounts(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

  rebalance(
    _baseLower: BigNumberish,
    _baseUpper: BigNumberish,
    _limitLower: BigNumberish,
    _limitUpper: BigNumberish,
    feeRecipient: string,
    swapQuantity: BigNumberish,
    amountMin: BigNumberish,
    sqrtPriceLimitX96: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    arg0: BigNumberish,
    arg1: string,
    arg2: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deposit(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: string,
      arg3: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalAmounts(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    rebalance(
      _baseLower: BigNumberish,
      _baseUpper: BigNumberish,
      _limitLower: BigNumberish,
      _limitUpper: BigNumberish,
      feeRecipient: string,
      swapQuantity: BigNumberish,
      amountMin: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      arg0: BigNumberish,
      arg1: string,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;
  };

  filters: {
    "Deposit(address,address,uint256,uint256,uint256)"(
      sender?: string | null,
      to?: string | null,
      shares?: null,
      amount0?: null,
      amount1?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber],
      {
        sender: string;
        to: string;
        shares: BigNumber;
        amount0: BigNumber;
        amount1: BigNumber;
      }
    >;

    Deposit(
      sender?: string | null,
      to?: string | null,
      shares?: null,
      amount0?: null,
      amount1?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber],
      {
        sender: string;
        to: string;
        shares: BigNumber;
        amount0: BigNumber;
        amount1: BigNumber;
      }
    >;

    "Rebalance(int24,uint256,uint256,uint256,uint256,uint256)"(
      tick?: null,
      totalAmount0?: null,
      totalAmount1?: null,
      feeAmount0?: null,
      feeAmount1?: null,
      totalSupply?: null
    ): TypedEventFilter<
      [number, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        tick: number;
        totalAmount0: BigNumber;
        totalAmount1: BigNumber;
        feeAmount0: BigNumber;
        feeAmount1: BigNumber;
        totalSupply: BigNumber;
      }
    >;

    Rebalance(
      tick?: null,
      totalAmount0?: null,
      totalAmount1?: null,
      feeAmount0?: null,
      feeAmount1?: null,
      totalSupply?: null
    ): TypedEventFilter<
      [number, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        tick: number;
        totalAmount0: BigNumber;
        totalAmount1: BigNumber;
        feeAmount0: BigNumber;
        feeAmount1: BigNumber;
        totalSupply: BigNumber;
      }
    >;

    "Withdraw(address,address,uint256,uint256,uint256)"(
      sender?: string | null,
      to?: string | null,
      shares?: null,
      amount0?: null,
      amount1?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber],
      {
        sender: string;
        to: string;
        shares: BigNumber;
        amount0: BigNumber;
        amount1: BigNumber;
      }
    >;

    Withdraw(
      sender?: string | null,
      to?: string | null,
      shares?: null,
      amount0?: null,
      amount1?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber],
      {
        sender: string;
        to: string;
        shares: BigNumber;
        amount0: BigNumber;
        amount1: BigNumber;
      }
    >;
  };

  estimateGas: {
    deposit(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: string,
      arg3: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getTotalAmounts(overrides?: CallOverrides): Promise<BigNumber>;

    rebalance(
      _baseLower: BigNumberish,
      _baseUpper: BigNumberish,
      _limitLower: BigNumberish,
      _limitUpper: BigNumberish,
      feeRecipient: string,
      swapQuantity: BigNumberish,
      amountMin: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      arg0: BigNumberish,
      arg1: string,
      arg2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: string,
      arg3: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getTotalAmounts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rebalance(
      _baseLower: BigNumberish,
      _baseUpper: BigNumberish,
      _limitLower: BigNumberish,
      _limitUpper: BigNumberish,
      feeRecipient: string,
      swapQuantity: BigNumberish,
      amountMin: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      arg0: BigNumberish,
      arg1: string,
      arg2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
