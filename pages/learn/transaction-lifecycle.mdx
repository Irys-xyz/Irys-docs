---
sidebar_position: 6
title: Bundlr Transaction Lifecycle
description: Understand each step of the process as a transaction is processed by Bundlr.
slug: /learn/transaction-lifecycle
---

# Bundlr Transaction Lifecycle / Permanent Storage

When you post a transaction to Bundlr, you are instantly given back a signed receipt from the node you upload to. While it takes over 100 minutes to achieve transaction finality on Arweave, we **optimistically** consider the transaction **final** at upload time as our nodes have internal safeguards which ensure transaction finality on Arweave. Additionally, when we move to mainnet and transition from the current centralized architecture to a decentralized one, we will have built-in economic safeguards that penalize miners for malicious behavior.

Internally, all data submitted to Bundlr is collected by a bundler. Roughly every 2 minutes, the bundler groups transactions, merges them into a single bundle, and submits them to Arweave.

Since we’re submitting data to Arweave, it’s important to understand what happens over there too.

Arweave currently uses its 2.0 transactions format, which includes an id, a signature, a public key, meta tags, and the amount of money you’re sending. While the 1.0 format included your data, the 2.0 format notably **does not include your data**. The reason they moved away from including the data in the transaction was to accommodate larger uploads. With a block time of roughly 2 minutes, the maximum upload to Arweave was limited by network transmission speeds. The laws of physics and the current state of network hardware created an upper limit on data size which constrained Arweave’s ability to scale.

In the current 2.6 Arweave version, miners submit the smaller header information first, and then they seed the actual data to their peers afterward. To incentivize miners to store as much data as possible, Arweave operates under a protocol called [Succinct Proof of Random Access (SPoRA)](https://www.youtube.com/watch?v=sIccEJTVHXg) where miners need to prove they have access to a random piece of historical data. The more data a miner stores, the greater the number of mining rewards they can earn. Miners have the option of how much data to store, and while there are storage costs associated with storing the full dataset, storing data is also the path to earning more mining rewards.

![](/img/learn/ar26.png)

After submitting your transaction header to Arweave, Bundlr continually monitors the submission, if finality is not achieved, the transaction is automatically resubmitted.

In addition to submitting the transaction header, Bundlr also submits your data to a network of miners. In general, your data is submitted to a minimum of 10 miners and is guaranteed to be seeded to a minimum of 3 miners.

Bundlr decides which miners to seed your data to based on our internal reliability score. We constantly scan Arweave, starting first at a known miner, then recursively scanning all of its peers, all of those peer’s peers, and so on. Each miner is given a reliability score that while initially based on the scores of its peers, is continually updated based on that miner’s behavior. Miners are **praised** for good behavior and **punished** for bad behavior. As any one instance of bad behavior can be detrimental to the network, we use a logarithmic scoring system. The higher a miner’s score, the harder it becomes to increase that score. However, any instance of bad behavior causes an immediate and linear decrease in a miner’s score. Miners are extra careful to avoid bad behavior as a single instance will cause their score to drop significantly and due to the logarithmic scoring system, it will then take time to rebuild a previous reliability score.

Our **praise and punish** reputation system has an additional added benefit of helping responsible miners earn greater rewards. Responsible behavior leads to a higher reputation score, a higher score means we seed data directly to them, which means they’re able to supply the recall block quicker, which in turn means they’re able to complete the block quicker and earn greater rewards.

![](/img/learn/praise-punish.png)
