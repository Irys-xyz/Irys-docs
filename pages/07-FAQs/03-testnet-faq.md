---
sidebar_position: 3
sidebar_label: Testnet FAQ
description: Frequently asked questions about our testnet.
---

# Testnet FAQ

## How can I participate in the testnet?

[Here is a full guide.](/learn/setup-validator-node)

## What are the hardware requirements?

Memory: 8GB RAM

-   CPU: Quad-Core
-   Disk: 250 GB SSD Storage
-   Bandwidth: 1 Gps for download/ 100 Mbps for upload.

## Which wallet should I use for participating in the testnet?

Arweave.app
Here is [a tutorial on how to get an Arweave wallet](/tutorials/get-arweave-wallet)

## I have generated a wallet via cargo, how can I see the address?

Run: `cargo run --bin wallet-tool show-address --wallet ./wallet.json`

## Do I need Arweave tokens to participate in the testnet?

No. In order to participate, you will receive testnet tokens [from the Bundlr faucet.](https://bundlr.network/faucet)

## Where can I get the test tokens?

From [the Faucet.](https://bundlr.network/faucet) These tokens are NOT on the main Arweave blockchain, but you will need an Arweave wallet to receive them.

## Do I need to pass KYC for participating in the testnet?

No. KYC is not required.
However, you should verify your Twitter account in order to claim test tokens
from [the Faucet.](https://bundlr.network/faucet)

## How can I check to see if I have received test tokens or not?

Run: `testnet-cli balance <address>`

## Can I participate in TESTNET I as a delegator?

No. Delegation and staking will be available on TESTNET II.

## I did everything but have not received test tokens. What should I do?

Simply join our [Discord channel](https://discord.gg/bundlr) and post your tweet URL in #faucet-issues channel.
Ps: Please note that you can ONLY verify 1 address with each Twitter account.

## I have received test tokens but cannot see them in my Arweave wallet. Is it fine?

Yes. We use a separate Arweave network.

## Is there any incentivization for TESTNET I ?

TESTNET I is unincentivized.

## Is there going to be an incentivized testnet in the future?

Yes. TESTNET II is going to be incentivized.

## Will there be any advantage for those who participated in TESTNET I in the future?

There is no public info available for this. You can participate in both phases.

## How can I check to see if my node is running?

Run the command: `docker-compose ps` - you should see three entries (or more if you’re running other containers) - check that there are containers called `gateway`, `validator`, and `postgres`, and that they are running.

## What is the current validator contract address?

RkinCLBlY4L5GZFv8gCFcrygTyd5Xm91CzKlR6qxhKA

## When does TESTNET I end?

There is no confirmed end date for TESTNET I. Please follow the announcements.

## Should I keep my validator live until Testnet II?

Yes. You can keep your validator as long as you want.

## How can I prove that a validator belongs to me?

You only need to backup the wallet.json file.

## I want to move my node to a better server, which file should I backup before migrating?

You only need to backup the wallet.json file.
