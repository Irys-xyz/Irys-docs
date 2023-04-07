---
sidebar_position: 4
sidebar_label: Getting Node Balance
description: Obtaining balance funded on a given node.
slug: /cli/balance
---

# Getting Node Balance

Use the `balance` command followed by a wallet address to get the amount funded to a specific node. Balances uploaded are unique to the node they were uploaded to, they are not shared across nodes.

Required option flags:

-   -h: Node address (eg: https://node1.bundlr.network)
-   -c: Currency (eg: arweave, ethereum, matic, solana)

```console
bundlr balance <address> -h <node_address> -c <currency>
bundlr balance Ry2bDGfBIvYtvDPYnf0eg_ijH4A1EDKaaEEecyjbUQ4 -h https://node1.bundlr.network -c arweave
```
