---
sidebar_position: 5
sidebar_label: Getting Upload Price
description: Checking the price to upload n bytes.
slug: /cli/upload-price
---

# Getting Upload Price

Use the `price` command to query the price to upload a n bytes to a given node.

Required option flags:

-   -h: Node address (eg: https://node1.bundlr.network)
-   -c: Currency (eg: arweave)

```console
bundlr price <num_bytes> -h <node_address> -c <currency>
bundlr price 1048576 -h https://node1.bundlr.network -c arweave
bundlr price 1048576 -h https://node1.bundlr.network -c ethereum
```
