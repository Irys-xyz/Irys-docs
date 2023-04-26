---
description: Withdrawing excess funds from a node.
---

# Withdrawing Funds

Use the `withdraw` command followed by a withdrawal amount in atomic units to withdraw funds from a node.

Required option flags:

-   -h: Node address (eg: `https://node1.bundlr.network`)
-   -w: Name of wallet file on your local system
-   -c: Currency (eg: arweave)

## `bundlr withdraw`

```console
bundlr withdraw <amount-in-atomic-units> -h <node-address> -w <wallet-file> -c <currency>
bundlr withdraw 1479016 -h https://node1.bundlr.network -w wallet.json -c arweave
```
