---
sidebar_position: 5
sidebar_label: Connecting To A Node
description: Public and Devnet node addresses and sample code to connect.
slug: /sdk/connecting-node
---

# Connecting To A Node

To connect to a Bundlr node, provide your private key to allow for access to stored funds and for signing transactions.

When creating a Bundlr object there are two methods, depending on if you're using JavaScript or TypeScript:

1. TypeScript: `const bundlr = new Bundlr("http://node1.bundlr.network", "arweave", “<arweave_private_key>”);`
2. JavaScript: `const bundlr = new Bundlr.default("http://node1.bundlr.network", "matic", “<polygon_private_key>”);`

The Bundlr constructor accepts three arguments:

1. Node address: Address of the node you’ll connect to, current options are http://node1.bundlr.network, http://node2.bundlr.network and https://devnet.bundlr.network
2. Currency: Name of the currency used to pay.
3. Key: Your private key.

You can optionally specify a custom RPC:

`const bundlr = new Bundlr("https://devnet.bundlr.network", "solana", "<solana_private key>", { providerUrl: "https://api.devnet.solana.com" });`

```js
import Bundlr from "@bundlr-network/client";
import fs from "fs";

// Change this line to match the name of the wallet key file
// you downloaded from https://faucet.arweave.net/.
// Physically move your key file from the download directory to the
// project directory that holds this JS file.
const privateKey = "arweave-key-aOTcToJZnW6wQQE6fKSFCta7etFX5Gy8KjJ_B-GsS14.json";

const jwk = JSON.parse(fs.readFileSync(privateKey).toString());

// NOTE: Depending on the version of JavaScript you use, you may need to use
// the commented out line below to create a new Bundlr object.
// const bundlr = new Bundlr("http://node1.bundlr.network", "arweave", jwk);
const bundlr = new Bundlr.default("http://node1.bundlr.network", "arweave", jwk);

// Print your wallet address
console.log(`wallet address = ${bundlr.address}`);
```
