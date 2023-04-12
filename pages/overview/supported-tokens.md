# Supported Tokens

You can pay for transactions in any of the 14 cryptocurrencies we support.

| Currency / Blockchain | Currency | Parameter Value | Bundlr Support | WebBundlr Support |
| --------------------- | -------- | --------------- | -------------- | ----------------- |
| Aptos                 | APT      | aptos           | yes            | yes               |
| Algorand              | ALGO     | algorand        | yes            | no                |
| Arbitrum              | ETH      | arbitrum        | yes            | yes               |
| Arweave               | AR       | arweave         | yes            | no                |
| Avalanche C-Chain     | AVAX     | avalanche       | yes            | yes               |
| Boba                  | BOBA     | boba            | yes            | yes               |
| Boba-eth              | ETH      | boba-eth        | yes            | yes               |
| Chainlink             | LINK     | chainlink       | yes            | no                |
| Ethereum              | ETH      | ethereum        | yes            | yes               |
| Fantom                | FTM      | fantom          | yes            | yes               |
| Near                  | NEAR     | near            | yes            | yes               |
| Polygon               | MATIC    | matic           | yes            | yes               |
| Solana                | SOL      | solana          | yes            | yes               |

To use a different currency, simply link your private key and supply the currency name when creating a new Bundlr object. The accepted values for "currency_name" are listed in the third column of the table above.

General Format:

```js
import Bundlr from “@bundlr-network/client”;

const bundlr = new Bundlr("<node_url>", "<currency_name>", "<private_key>");

await bundlr.upload(“Hello world”);
```

Matic Example:

```js
import Bundlr from “@bundlr-network/client”;

const bundlr = new Bundlr(“https://node2.bundlr.network”, “matic”, “<matic_private_key>”);

await bundlr.upload(“Hello world”);
```

You can also use our [devnet](/sdk/using-devnet) with free devnet currencies available from public faucets.
