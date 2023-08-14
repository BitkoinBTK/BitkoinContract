import { System, Protobuf, authority } from "@koinos/sdk-as";
import { bitkoincontract } from "./proto/bitkoincontract";

export class Bitkoincontract {
  name(args: bitkoincontract.name_arguments): bitkoincontract.name_result {
    // YOUR CODE HERE

    const res = new bitkoincontract.name_result();
    // res.value = ;

    return res;
  }

  symbol(
    args: bitkoincontract.symbol_arguments
  ): bitkoincontract.symbol_result {
    // YOUR CODE HERE

    const res = new bitkoincontract.symbol_result();
    // res.value = ;

    return res;
  }

  decimals(
    args: bitkoincontract.decimals_arguments
  ): bitkoincontract.decimals_result {
    // YOUR CODE HERE

    const res = new bitkoincontract.decimals_result();
    // res.value = ;

    return res;
  }

  total_supply(
    args: bitkoincontract.total_supply_arguments
  ): bitkoincontract.total_supply_result {
    // YOUR CODE HERE

    const res = new bitkoincontract.total_supply_result();
    // res.value = ;

    return res;
  }

  balance_of(
    args: bitkoincontract.balance_of_arguments
  ): bitkoincontract.balance_of_result {
    // const owner = args.owner;

    // YOUR CODE HERE

    const res = new bitkoincontract.balance_of_result();
    // res.value = ;

    return res;
  }

  allowance(
    args: bitkoincontract.allowance_arguments
  ): bitkoincontract.allowance_result {
    // const owner = args.owner;
    // const spender = args.spender;

    // YOUR CODE HERE

    const res = new bitkoincontract.allowance_result();
    // res.value = ;

    return res;
  }

  approve(
    args: bitkoincontract.approve_arguments
  ): bitkoincontract.empty_message {
    // const owner = args.owner;
    // const spender = args.spender;
    // const value = args.value;

    // YOUR CODE HERE

    const res = new bitkoincontract.empty_message();

    return res;
  }

  transfer(
    args: bitkoincontract.transfer_arguments
  ): bitkoincontract.empty_message {
    // const from = args.from;
    // const to = args.to;
    // const value = args.value;

    // YOUR CODE HERE

    const res = new bitkoincontract.empty_message();

    return res;
  }

  mint(args: bitkoincontract.mint_arguments): bitkoincontract.empty_message {
    // const to = args.to;
    // const value = args.value;

    // YOUR CODE HERE

    const res = new bitkoincontract.empty_message();

    return res;
  }

  burn(args: bitkoincontract.burn_arguments): bitkoincontract.empty_message {
    // const from = args.from;
    // const value = args.value;

    // YOUR CODE HERE

    const res = new bitkoincontract.empty_message();

    return res;
  }
}
