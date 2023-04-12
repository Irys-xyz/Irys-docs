---
sidebar_position: 7
sidebar_label: Withdrawing Funds
description: Withdrawing excess funds from a node.
slug: /cli/withdrawing-funds
---

# Withdrawing Funds

Use the `withdraw` command followed by a withdrawal amount in atomic units to withdraw funds from a node.

Required option flags:

-   -h: Node address (eg: https://node1.bundlr.network)
-   -w: Name of wallet file on your local system
-   -c: Currency (eg: arweave)

```console
bundlr withdraw <amount_in_atomic_units> -h <node_address> -w <wallet_file> -c <currency>
bundlr withdraw 1479016 -h https://node1.bundlr.network -w wallet.json -c arweave
```
