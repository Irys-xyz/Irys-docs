---
sidebar_position: 6
title: Fees
description: Understand our dynamic fee structure.
slug: /learn/fees
---

# Fees

Bundlr's fee is dynamic and depends on several parameters. The fee for each bundler is different, creating competition between bundlers to provide a cost-efficient high QoS.

## Fee Computation

Fees are computed as follows:

`bundlr_fee(X = number of bytes) = arweave_cost(max(X, 10000)) * conversion_rate("AR", currency) * global_multiplier * oracle_fee`

-   `arweave_cost` is cost of storing `X` number of bytes on Arweave using linear pricing (i.e. ignoring minimum chunk size). e.g. if `arweave_cost(256KB) = $2.56` then `arweave_cost(1KB) = $0.01`
-   `conversion_rate` is the conversion rate between AR and some other currency (e.g. MATIC). This allows users to pay the same fees in different currencies.
-   `global_multiplier` is a multiplier applied to all transactions which can be seen as a “profit margin”.
-   `oracle_fee` is a risk multiplier which accounts for cost of treasury management and asset volatility.

:::note
Due to a ~3.5x increase in the base cost to store on Arweave (arweave_cost) brought about by the 2.6 hardfork, we temporarily subsidize 75% of all upload costs. We expect the cost to stabilize as new miners enter the network and will discontinue subsidizing when the base cost drops.
:::
