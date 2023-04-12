---
sidebar_position: 7
sidebar_label: Withdrawing Funds
description: Withdrawing excess funded balance.
slug: /sdk/withdrawing
---

# Withdrawing Funds

Funds deposited into a node can be easily withdrawn at any time. The function `bundlr.withdrawBalance(amountInAtomicUnits)` accepts an amount (in atomic units) to withdraw and returns a response object that includes transaction id, requested amount, network fees, and final cost.

The code below checks the funded balance and then withdraws it all.

```js
try {
	// 400 - something went wrong
	// response.data = "Not enough balance for requested withdrawal"

	// 200 - Ok
	// response.data = {
	// requested, // the requested amount,
	// fee, // the reward required by the network (network fee)
	// final, // total cost to your account (requested + fee)
	// tx_id, // the ID of the withdrawal transaction
	// }
	// 1. Get current balance
	const curBalance = await bundlr.getLoadedBalance();
	// 2. Withdraw all
	const response = await bundlr.withdrawBalance(curBalance);

	console.log(`Funds withdrawn txID=${response.data.tx_id} amount requested=${response.data.requested}`);
} catch (e) {
	console.log("Error funding node ", e);
}
```
