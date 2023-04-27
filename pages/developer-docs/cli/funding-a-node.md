---
description: Transferring funds from your wallet to a node.
---

# Funding A Node

Use the `fund` command followed by a funding amount in atomic units to transfer funds from your wallet to the specified node.

Required option flags:

-   -h: Node address (eg: `https://node1.bundlr.network`)
-   -w: Name of wallet file on your local system
-   -c: Currency (eg: arweave)

## `bundlr fund`

```console
bundlr fund <amount-in-atomic-units> -h <node-address> -w <wallet-file> -c <currency>
bundlr fund 1479016 -h https://node1.bundlr.network -w wallet.json -c arweave
```
