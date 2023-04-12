---
sidebar_position: 6
sidebar_label: Funding A Node
description: Transferring funds from your wallet to a node.
slug: /cli/funding-node
---

# Funding A Node

Use the `fund` command followed by a funding amount in atomic units to transfer funds from your wallet to the specified node.

Required option flags:

-   -h: Node address (eg: https://node1.bundlr.network)
-   -w: Name of wallet file on your local system
-   -c: Currency (eg: arweave)

```console
bundlr fund <amount_in_atomic_units> -h <node_address> -w <wallet_file> -c <currency>
bundlr fund 1479016 -h https://node1.bundlr.network -w wallet.json -c arweave
```
